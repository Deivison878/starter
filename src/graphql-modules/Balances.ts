import { gql } from "apollo-server-express";
import { Balances } from "../entities/Balances";
import { getRepository } from "typeorm";

export const typeDefs = gql`
  type Balance {
    id: ID!
    date: String!
    balance: Float!
  }

  extend type Query {
    get_all_balances: [Balance]
  }

  extend type Mutation {
    insert_balance(id: ID!, date: String!, balance: Float!): Balance
  }
`;
export const resolvers = {
  Query: {
    get_all_balances: async () => getRepository(Balances).find(),
  },
  Mutation: {
    insert_balance: async (obj: any, args: any) => {
      const balance = new Balances();
      balance.date = args.date;
      balance.balance = args.balance;
      return getRepository(Balances).save(balance);
    },
  },
};
