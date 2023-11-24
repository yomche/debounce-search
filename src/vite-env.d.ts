/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string;
  readonly VITE_APP_API_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
