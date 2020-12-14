import { EasyExpressServer } from "@easy-express/server";

// Create a new server
let server = new EasyExpressServer();

// Define a 'get' route
server.instance.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
server.start();
