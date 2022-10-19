import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type User {
    username: String
    githubURL: String
  }

  type Technology {
    technology: String
    proficiency: Int
    User: User
  }

  type Query {
    users: User
    technology: [Technology]
  }
`;
