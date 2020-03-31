import mongoose, {Schema} from 'mongoose';

const eventModel = new Schema(
    {
        title: {type:String},
        contact: {type:String},
        startDate: {type: Date},
        endDate: {type: Date}
    }
);

module.exports = mongoose.model('Event', eventModel);