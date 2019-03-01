import { Execute } from "../../application/savings/GetSavingsByYearsQuery";

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLFloat
} = require("graphql");

// Root Query
export const Savings = new GraphQLObjectType({
  name: "GetTotalSavingsByYears",
  fields: {
    GetTotalSavingsByYears: {
      type: GraphQLFloat,
      args: {
        amount: { type: GraphQLInt },
        yearlyReturn: { type: GraphQLFloat },
        nbrYears: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return Execute(args.amount, args.yearlyReturn, args.nbrYears);
      }
    },
    GetTotalSavingsByMonths: {
      type: GraphQLFloat,
      args: {
        amount: { type: GraphQLInt },
        yearlyReturn: { type: GraphQLFloat },
        nbrYears: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return Execute(args.amount*12, args.yearlyReturn, args.nbrYears);
      }
    }
  }
});

export const savingsSchema = new GraphQLSchema({
  query: Savings
});
