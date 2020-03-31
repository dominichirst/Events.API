const eventsController = (Event) => {
    const post = (req, res) => {
        const event = new Event(req.body)

        if(!event.title) {
            return res.sendStatus(400);
        }

        event.save();
        return res.status(201).res.json(event);
    }

    const get = (req, res) => {
        Event.find((err, events) => {
            if (err) {
                return res.send(err);
            }
            return res.json(events);
        });
    }

    const put = (req, res) => {
        const { event } = req;
        event.title = req.body.title;
        event.contact = req.body.contact;
        event.startDate = req.body.startDate;
        event.endDate = req.body.endDate;
        req.event.save((err) => {
            if (err) {
                return res.send(err);
            }

            return res.json(event);
        });
    }

    const deleteEvent = (req, res) => {
        req.event.remove((err) => {
            if (err) {
                return res.send(err);
            }

            return res.sendStatus(204);
        });
    }

    const patch = (req, res) => {
        const { event } = req;
        if (req.body._id) {
            delete req.body._id;
        }
        
        Object.entries(req.body).forEach(([key, value]) => event[key] = value);
 
        req.event.save((err) => {
            if (err) {
                return res.send(err);
            }

            return res.json(event);
        });
    }

    const fetchEvent = (req, res, next) => {
        Event.findById(req.params.eventId, (err, event) => {
            if (err) {
                return res.send(err);
            }
            if (event) {
                req.event = event;
                return next();
            }

            return res.sendStatus(404);
        });

    }

    return {post, get, put, deleteEvent, patch, fetchEvent};
}

module.exports = eventsController;