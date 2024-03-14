import * as dotenv from "dotenv";

dotenv.config();

const { PORT, MONGODB_URI, JWT_SECRET } = process.env;

if (!PORT || !MONGODB_URI || !JWT_SECRET) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

export default {
  port: parseInt(PORT),
  mongodbUri: MONGODB_URI,
  jwtSecret: JWT_SECRET,
};