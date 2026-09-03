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

// * GET method, this will match /testget, /testget/abc, /testget/1
app.get("/testget", (req, res) => {
    res.send({name: "John", age: 30});
});

// * Express 4 supports the ? route pattern. This matches /ac and /abc because b is optional.
// * Express 5 does not support ? for optional route parts. Use braces instead: /a{b}c.
// * Braces make the text inside them optional, so /a{b}c also matches /ac and /abc.
// * For an optional named parameter in Express 5, use braces around the parameter: /user{/:id}.
app.get("/ab?c", (req, res) => {
    res.send("Hello from express js optional get method using ?");
});

// * will work for abc, abbbc, abbc
app.get("/ab+c", (req, res) => {
    res.send("Hello from express js optional get method using +");
});

//* regex expression, will work for ac, abc, abbc, abbbc, abbbbc
// * abcd, abAnyThingcd, ab123cd, abxyzcd, etc. will also work
app.get("/ab*cd", (req, res) => {
    res.send("Hello from express js optional get method using *");
});

// * Group optional will work for ad, abcd, abcd, abcd, etc. but not for abcd, abcd, abcd, etc.
app.get("/a(bc)?d", (req, res) => {
    res.send("Hello from express js optional get method using ?");
});

//* regex for any string with a will work for a, ab, ac, abc, abcd, abcd, etc. but not for bcd, cde, def, etc.
app.get("/a/", (req, res) => {
    res.send("Hello from express js optional get method using regex");
});

// * Access query params using req.query object. For example, if the request is /user?name=John&age=30, then req.query will be { name: 'John', age: '30' }.
app.get("/user", (req, res) => {
    console.log(req.query); // to access query params
    res.send("Hello from express js optional get method using regex");
});

// * Dynaimic url , /user/123, /user/abc, /user/xyz, etc. will work. We can access the userID using req.params.userID
app.get("/user/:userID", (req, res) => {
    console.log(req.params); // to access path params
    res.send("Hello from express js optional get method using regex");
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