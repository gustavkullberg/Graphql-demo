import {Execute} from '../../application/primes/PrimeQueryHandler'

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    root: {
      type: GraphQLString,
      resolve(parent, args) {
        return "Hello there"
      }
    },
    prime: {
        type: new GraphQLList(GraphQLString),
        args: {
            number : {type : GraphQLInt}
        },
        resolve(parent, args) {
            return Execute(args.number)
        }
    }
  }
});

export const primeSchema =  new GraphQLSchema({
  query: RootQuery
});