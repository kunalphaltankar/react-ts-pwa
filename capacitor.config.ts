import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "react-ts-pwa",
  webDir: "dist",
  server: {
    url: "http://172.20.10.15:3000",
    cleartext: true,
  },
};

export default config;
