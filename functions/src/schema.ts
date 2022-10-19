import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type User {
    username: String
    githubURL: String
  }

  type Profile {
    userId: Int
    technology: String
    proficiency: Int
    score: Int
    User: User
  }

  type Query {
    users: User
    findUsers: [Profile]
  }
`;
