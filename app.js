import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Event from './models/eventModel';
import eventRouter from './routes/eventRouter';
import eventSchema from './graphql/schema';
import GraphQLHTTP from 'express-graphql';

const app = express();
const MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/eventAPI';
const db = mongoose.connect(MONGOLAB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const port = process.env.PORT || 5000;
const schema = eventSchema(Event); 

mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/graphql'));

app.use('/api', eventRouter(Event));
app.use('/graphql', GraphQLHTTP({schema, graphiql: true }));


app.listen(port, () => {
    console.log(`running on port ${port}`);
});
