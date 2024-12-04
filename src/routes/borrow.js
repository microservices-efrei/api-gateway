const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = express.Router();

router.use(
  "/",
  createProxyMiddleware({
    target: process.env.BORROW_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/borrow": "/", // Réécrire "/borrow" en "/"
    },
  })
);

module.exports = router;
