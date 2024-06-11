/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PWA_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
