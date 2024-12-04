const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRoutes = require("./src/routes/indexRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les JSON
app.use(express.json());
app.use(cors());

// Définir les routes
app.use("/api", indexRoutes); // Routes vers toutes les routes de chaque service
app.use(express.urlencoded({ extended: true }));

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
