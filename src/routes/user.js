const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = express.Router();

router.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/users": "/", // Réécrire "/users" en "/"
    },
  })
);

module.exports = router;
