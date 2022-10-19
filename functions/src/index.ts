import * as functions from "firebase-functions";
import express = require("express");
import admin from "firebase-admin";
import {ApolloServer} from "apollo-server-express";

import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./src/service-account.json"),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => server.applyMiddleware({app, path: "/", cors: true}));

exports.graphql = functions.https.onRequest(app);
