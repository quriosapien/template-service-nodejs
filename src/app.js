import express from "express";

import AppConfig from "../config/defaults.js";
const app = express();

app.get("/", async function (req, res) {
  res.json({
    message: "hello",
  });
});

app.get("/health", async function (_req, res) {
  res.json({
    appName: AppConfig.APP_NAME,
    appVersion: AppConfig.APP_VERSION,
    env: AppConfig.ENV,
    health: "alive",
    resources: "healthy",
  });
});

app.get("*", async function (_req, res) {
  res.send("<pre>Unknown resource requested.</pre>");
});

export default app;
