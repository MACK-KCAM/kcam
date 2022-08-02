const path = require('../../route/path');

// CHECK PATH FILE TO DETERMINE IF REQUESTED ROUTE HAS REQUESTED METHOD DEFINED
const func = (req, res, next) => {
    console.log(`Middleware received ${req.method} request from ${req.socket.remoteAddress}`);
    // const route = path(req.url);
    let route = path(req.url);
    if (Object.keys(req.query).length > 0) {
        const url = req.url.substring(0, req.url.indexOf('?'));
        route = path(url);
    }
    if (route.methods.includes(req.method)) {
        next();
    } else {
        const error = {
            status: 405,
            message: "This type of method is not supported by this endpoint"
        }
        res.setHeader("allow", route.methods);
        res.status(405).json(error);
    }
}

module.exports = func;