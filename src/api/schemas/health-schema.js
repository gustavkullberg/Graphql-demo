const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

const HealthcheckObject = new GraphQLObjectType({
  name: 'healthObject',
  fields: () => ({
    status: { type: GraphQLString },
    timeStamp: { type: GraphQLString },
  })
});

// Root Query
export const HealthCheck = new GraphQLObjectType({
  name: 'healthcheck',
  fields: {
    healthcheck: {
        type: HealthcheckObject,
        resolve() {
            HealthcheckObject.status = "OK",
            HealthcheckObject.timeStamp = new Date().toString()
            return  HealthcheckObject 
        }
    }
  }
});

export const healthSchema = new GraphQLSchema({
  query: HealthCheck
});