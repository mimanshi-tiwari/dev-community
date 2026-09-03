const express = require('express');

const app = express();

//* callback function is called route handler, it will be called when the route is matched
//* There can be multiple route handlers for a single route, they will be called in the order they are defined
// * next is given by express js, it is a function that will be called to pass the control to the next route handler
app.use(
  '/user',
  (req, res, next) => {
    console.log('Route handler 1');
    // res.send('Hello from express js, route handler 1');
    next();
  },
  (req, res, next) => {
    console.log('Route handler 2');
    res.send('Hello from express js, route handler 2');
    // next(); // express expects another route handler, so api throws errpr 404 annot get /user
  }
);

//* we can also wrap the route handlers in an array, and pass the array to app.use
app.use(
  '/user2',
  [
    (req, res, next) => {
      console.log('Route handler 1 for /user2');
      next();
    },
    (req, res, next) => {
      console.log('Route handler 2 for /user2');
      res.send('Hello from express js, route handler 2 for /user2');
    }
  ]
);

//* app.use("/user3", [rh1, rh2], rh3)

/**
 * MIDDLEWARES
 * Actually all the route hanldes in middle which are not resnding response are middlewares.
 * And route hanlder is actuallu the route that sends the response to the client.
 *  GET /user => Middleware chain => response handler => response sent to client
 */

app.listen(3000, () => {
  console.log('Middleware and Error Handlers  Server is running on port 3000');
});
