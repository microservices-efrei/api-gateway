const express = require("express");
const createServiceProxy = require("../utils/proxy");

const router = express.Router();
const bookServiceProxy = createServiceProxy("http://book-service:3003");

router.use("/", bookServiceProxy);

module.exports = router;
