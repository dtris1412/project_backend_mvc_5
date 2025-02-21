const express = require("express");
const app = express();
const path = require("path");
const conection = require("./config/database");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use("/", webRoutes);

//test conection

//query
conection.query("select * from Users", function (err, result, fields) {
  console.log(">>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
