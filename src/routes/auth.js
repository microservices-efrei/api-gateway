const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = express.Router();

// Redirection du chemin vers le service user-service
router.use(
  "/", // Cette route est ce que l'API Gateway écoutera
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL, // URL de ton service user-service (ex: http://localhost:3001)
    changeOrigin: true, // Change l'origine de la requête
    pathRewrite: {
      // Réécrire /api/auth/register -> /api/auth/register sur user-service
      "^/api/auth": "/api/auth", // Réécrire "/api/auth" en "/api/auth" (ici ça ne change rien, juste un placeholder)
    },
    onProxyReq: (proxyReq, req, res) => {
      console.log(
        `Proxying request to ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
      );
    },
  })
);

module.exports = router;
