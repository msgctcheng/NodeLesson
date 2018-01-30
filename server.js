const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT  = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/bark", function(request, response) {
    response.sendFile(path.join(__dirname, "Bark.html"));
});
app.get("/cluck", function(request, response) {
    response.sendFile(path.join(__dirname, "Cluck.html"));
});
app.get("/dino", function(request, response) {
    response.sendFile(path.join(__dirname, "RawR.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

