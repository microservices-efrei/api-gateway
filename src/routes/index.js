const express = require("express");

const userRoutes = require("./user");
const bookRoutes = require("./book");
const borrowRoutes = require("./borrow");
const authRoutes = require("./auth");

const app = express();

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/borrows", borrowRoutes);

module.exports = app;
