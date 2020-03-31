import { GraphQLNonNull, GraphQLString } from "graphql";

const deleteEvent = (type, Event, pubsub, topic) => {

    return  {
        type,
        args: {
            _id: {
                name: '_id',
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: (parentValue, args, request) => {
            const event =  Event.findByIdAndRemove(args._id);
            pubsub.publish(topic, event);
            return event;
        }
    }
}



module.exports = deleteEvent;