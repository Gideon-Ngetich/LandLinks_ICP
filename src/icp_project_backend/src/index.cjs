"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./Config/config");
var db_1 = require("./db");
var Auth_1 = require("./routes/Auth");
var app = express();
// Connect to MongoDB
(0, db_1.default)();
// Middleware
app.use(express.json());
// Routes
app.use("/api/auth", Auth_1.default);
// Start the server
app.listen(config_1.default.port, function () {
    console.log("Server running on port ".concat(config_1.default.port));
});
