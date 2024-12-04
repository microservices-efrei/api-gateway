const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = express.Router();

router.use(
  "/",
  createProxyMiddleware({
    target: process.env.BOOK_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/books": "/", // Réécrire "/books" en "/"
    },
  })
);

module.exports = router;
