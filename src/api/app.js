const express = require("express");
const graphqlHTTP = require("express-graphql");

//import { mergeSchemas as _mergeSchemas } from "graphql-tools";
const {mergeSchemas} = require("graphql-tools");
const {connectToDb} = require("../infrastructure-mongodb");


//const mergeSchemas = require("graphql-tools");
require('dotenv').config()

const app = express();
const {healthSchema, primeSchema, authSchema, savingsSchema} = require("./schemas")

app.use(express.json());

//schemas
let schema = mergeSchemas({
  schemas: [healthSchema, primeSchema, authSchema, savingsSchema]
});
//static

//port
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.env == 'Development'
  })
);
//Startup
(async () => {
  await connectToDb("mongodb://localhost:27017");
  app.listen(process.env.APP_PORT, () =>
    console.log(`Server started on port ${process.env.APP_PORT} ;p`)
  );
  
})().then(
  () => null,
  err => {
    console.log(`Express was not started ${err}`), process.exit(1);
  }
);
