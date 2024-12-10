const express = require("express");
const createServiceProxy = require("../utils/proxy");

const router = express.Router();
const borrowServiceProxy = createServiceProxy("http://borrow-service:3002");

router.use("/", borrowServiceProxy);

module.exports = router;
