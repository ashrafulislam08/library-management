import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";
const port = 5000;
let server: Server;

async function main() {
  try {
    const uri = `${process.env.MONGODB_URI}`;
    await mongoose.connect(uri);
    server = app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
