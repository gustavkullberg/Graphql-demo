import { Execute } from "../../application/auth/GetJwtTokenQueryHandler";

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

// Root Query
export const Authorization = new GraphQLObjectType({
  name: "GetJwtToken",
  fields: {
    JwtToken: {
      type: GraphQLString,
      resolve() {
        return Execute(null);
      }
    }
  }
});

export const authSchema = new GraphQLSchema({
  query: Authorization
});
