import { InjectManifest } from "workbox-webpack-plugin";

export const config = {};

if (import.meta.env.NODE_ENV === "production") {
  config["configureWebpack"] = { plugins: [new InjectManifest({ swSrc: "./service-worker.js" })] };
}
