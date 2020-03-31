import { GraphQLNonNull, GraphQLString } from "graphql";

const addEvent = (type, Event, pubsub, topic) => {

    return  {
        type,
        args: {
            title: {
                name: 'title',
                type: new GraphQLNonNull(GraphQLString),
            },
            startDate: {
                name: 'startDate',
                type: new GraphQLNonNull(GraphQLString),
            },
            endDate: {
                name: 'endDate',
                type: new GraphQLNonNull(GraphQLString),
            }
        },
        resolve: (parentValue, args, request) => {
            const event = new Event(args)
            event.save();
            pubsub.publish(topic, event);
            return event;
        }
    }
}



module.exports = addEvent;