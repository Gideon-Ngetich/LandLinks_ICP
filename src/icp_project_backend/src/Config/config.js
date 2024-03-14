"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var _a = process.env, PORT = _a.PORT, MONGODB_URI = _a.MONGODB_URI, JWT_SECRET = _a.JWT_SECRET;
if (!PORT || !MONGODB_URI || !JWT_SECRET) {
    console.error("Missing required environment variables.");
    process.exit(1);
}
exports.default = {
    port: parseInt(PORT),
    mongodbUri: MONGODB_URI,
    jwtSecret: JWT_SECRET,
};
