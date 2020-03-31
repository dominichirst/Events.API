import { GraphQLNonNull, GraphQLString } from "graphql";

const updateEvent = (type, Event, pubsub, topic) => {

    return  {
        type,
        args: {
            _id: {
                name: '_id',
                type: new GraphQLNonNull(GraphQLString),
            },
            title: {
                name: 'title',
                type: GraphQLString,
            },
            startDate: {
                name: 'startDate',
                type: GraphQLString,
            },
            endDate: {
                name: 'endDate',
                type: GraphQLString,
            }
        },
        
        resolve: (parentValue, args, request) => {
            const event = new Event();
            Object.entries(args).forEach(([key, value]) => event[key] = value);
            pubsub.publish(topic, event);
            return Event.findByIdAndUpdate(args._id, event, {new: true});
        }
    }
}



module.exports = updateEvent;