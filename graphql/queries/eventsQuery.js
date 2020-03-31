import {GraphQLList } from "graphql";

const events = (eventType, EventModel) => {
   return {
        type: GraphQLList(eventType),
        resolve: () => EventModel.find()
    } 
}

module.exports = events;