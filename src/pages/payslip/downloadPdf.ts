import { FileOpener } from "@capacitor-community/file-opener";
import {
  Directory,
  DownloadFileOptions,
  Filesystem,
} from "@capacitor/filesystem";

export async function downloadPDF(
  url: string,
  progressListener?: (progress: number) => void
) {
  try {
    const options: DownloadFileOptions = {
      url: url,
      path: url.substring(url.lastIndexOf("/") + 1),
      progress: true,
      directory: Directory.Data,
      responseType: "blob",
      webFetchExtra: { mode: "no-cors" as RequestMode },
    };

    const progress = await Filesystem.addListener("progress", (progress) => {
      const downloadProgress = Math.round(
        (progress.bytes / progress.contentLength) * 100
      );
      progressListener?.(downloadProgress);
    });
    const response = await Filesystem.downloadFile(options);
    progress.remove();
    if (response.path) {
      FileOpener.open({
        filePath: response.path,
        contentType: "application/pdf",
      });
    }
  } catch (error) {
    console.error("Error downloading or saving the file:", error);
  }
}
