const express = require("express");
const createServiceProxy = require("../utils/proxy");

const router = express.Router();
const userServiceProxy = createServiceProxy("http://user-service:3001/api");

router.use("/", userServiceProxy);

module.exports = router;
