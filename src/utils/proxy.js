// src/utils/proxy.js
const axios = require("axios");

const createServiceProxy = (baseURL) => {
  return async (req, res) => {
    try {
      const method = req.method.toLowerCase();
      const path = req.path;
      const body = req.body;

      const response = await axios({
        method,
        url: `${baseURL}${path}`,
        data: body,
        headers: req.headers,
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ message: "Service unavailable" });
      }
    }
  };
};

module.exports = createServiceProxy;
