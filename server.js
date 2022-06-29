const express = require("express");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 3004;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api",apiRoute);
app.use("/",htmlRoute);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});