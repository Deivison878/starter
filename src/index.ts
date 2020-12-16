import { EasyExpressServer } from "@easy-express/server";
import { DatabaseModule } from "@easy-express/db";
import * as dotenv from "dotenv";
import { GraphQLModule } from "@easy-express/graphql";

// load env vars from .env file
dotenv.config();

// create a new server
let server = new EasyExpressServer();

// define routes for your server...
server.instance.get("/", (req, res) => {
  res.send("Hello World!");
});

// attach the modules
server
  .attachModule(new GraphQLModule(__dirname + "/graphql-modules/"))
  .then(() => {
    server
      .attachModule(new DatabaseModule(__dirname + "/entities/"))
      .then(() => {
        // Start the server after you've attached the two module
        server.start();
      })
      .catch((e) => {
        console.error(e);
        return e;
      });
  });
