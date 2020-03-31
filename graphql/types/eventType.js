import { GraphQLObjectType, GraphQLString } from "graphql";


const eventType = new GraphQLObjectType({
    name: 'events',
    fields: () => ({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        startDate: {type: GraphQLString},
        endDate: {type: GraphQLString}
    }),
});

module.exports = eventType;
