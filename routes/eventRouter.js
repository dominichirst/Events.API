import express from 'express';
import eventsController from '../controllers/eventsController';

 const routes = (Event) => {
    const eventRouter = express.Router();
    const controller = eventsController(Event);
    eventRouter.route('/events')
        .post(controller.post)
        .get(controller.get);

    eventRouter.use('/events/:eventId', controller.fetchEvent);

    eventRouter.route('/events/:eventId')
        .get((req, res) => res.json(req.event))
        .put(controller.put)
        .patch(controller.patch)
        .delete(controller.deleteEvent);

    return eventRouter;
}

module.exports = routes;