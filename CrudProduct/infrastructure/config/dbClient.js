import { MongoClient } from "mongodb"; // <-- Esto faltaba
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME;

const client = new MongoClient(MONGO_URI);
let db;

async function connect() {
  try {
    await client.connect();
    db = client.db(DB_NAME);
    console.log("MongoDB Conectado ");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
}

await connect();

export default { client, db };
