import { FileOpener } from "@capacitor-community/file-opener";
import {
  Directory,
  DownloadFileOptions,
  Filesystem,
} from "@capacitor/filesystem";

export async function downloadPDF(url: string) {
  try {
    /* // Fetch the PDF file as a Blob
    const response = await CapacitorHttp.get({
      url,
      responseType: "blob",
      dataType: "file",
    });
    console.log({ response });

    // Convert the Blob to a base64 string
    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    reader.onloadend = async () => {
      const base64data = reader?.result?.split(",")[1];
      console.log({ base64data });

      // Save the base64 string to the filesystem
      const fileName = `downloaded-${Date.now()}.pdf`;
      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64data,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });

      console.log("File saved:", savedFile);
    } */
    const options: DownloadFileOptions = {
      url: url,
      path: url.substring(url.lastIndexOf("/") + 1),
      progress: true,
      directory: Directory.Data,
      responseType: "blob",
      webFetchExtra: { mode: "no-cors" as RequestMode },
    };

    const response = await Filesystem.downloadFile(options);
    console.log({ response });
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
