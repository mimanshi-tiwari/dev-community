const express = require('express');
const app = express();

//MIDDLEWARE
app.use("/admin", (req, res, next) => {
   const token = "herhjwkerjehr";
   const isAdminAuthenticated = token === "herhjwkerjehr"; // just for example, in real world we will check the token from database or jwt or any other way

  if(!isAdminAuthenticated) {
    res.status(401).send("Unauthorized request")
  } else {
    next();
  }
});

// ERROR HANDLER, wrap hanlder in try catch clock
// order matters put error hanlder at end of all the route handlers, because express will check the routes in the order they are defined, if we define error handler at the beginning, it will catch all the errors and no other route handlers will be called.
app.use("/", (err, req, res, next) => {
if(err) {
    res.status(500).send('Something went wrong!')
}
})

app.listen(3000, () => {
  console.log('Middleware and Error Handlers  Server is running on port 3000');
});