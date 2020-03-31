import {GraphQLNonNull, GraphQLString } from "graphql";

const event = (type, EventModel) => {
   return {
        type,
        args: {
            _id: {
                name: '_id',
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: (parentValue, args, request) =>  EventModel.findById(args._id)
    } 
}

module.exports = event;