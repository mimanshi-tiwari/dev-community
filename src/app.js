const express = require("express");

const app = express(); // instance of new express js application

// ! ORDER OF ROUTES MATTERS
// * It will handle everything that comes to the root route of the application   
// * anything insode the "/" will be handled by this route handler
// ? If we move this code at last of file. Will the sequence of the code matter? 
// * Yes, it will matter because express js will check the routes in the order they are defined. If we define a route at the end, 
// * it will only be reached if no other route matches the request. If we define it at the beginning, 
// * it will catch all requests to the root route before any other routes are checked.
// app.use("/", (req, res) => {
//     res.send("Hello from express js");
// });

// * Since we have not defined METHOD for the route, it will handle all the requests that comes to the root route of the application.
// * GET, POST, PUT, DELETE, PATCH, etc. all will be handled by this route handler.
app.use("/test", (req, res) => {
    res.send("Hello from express js");
});

// * GET method
app.get("/testget", (req, res) => {
    res.send({name: "John", age: 30});
});

//* POST method
app.post("/testpost", (req, res) => {
    res.send("Hello from express js POST method");
});

//* DELETE method
app.delete("/testdelete", (req, res) => {
    res.send("Hello from express js DELETE method");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});