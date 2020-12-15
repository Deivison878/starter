import { EasyExpressServer } from "@easy-express/server";
import { DatabaseModule } from "@easy-express/db";
import * as dotenv from "dotenv";
import { getRepository } from "typeorm";
import { Balances } from "./entities/Balances";
// load env vars from .env file
dotenv.config();

// create a new server
let server = new EasyExpressServer();

// define routes for your server...
server.instance.get("/", (req, res) => {
  res.send("Hello World!");
});

// example of a route getting data from database using TypeORM
server.instance.get("/balances", async (req, res) => {
  return getRepository(Balances)
    .find()
    .then((result) => {
      res.send(result);
    });
});

// attach a new database module to the server
server
  .attachModule(new DatabaseModule([Balances]))
  .then(() => {
    // Start the server after you've attached the database module
    server.start();
  })
  .catch((e) => {
    console.error(e);
    return e;
  });
