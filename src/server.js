const express = require("express");
const app = express();
const path = require("path");
const mysql2 = require("mysql2");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use("/", webRoutes);

//test conection
//create conection database
const conection = mysql2.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
//query
conection.query("select * from Users", function (err, result, fields) {
  console.log(">>>", result);
  console.log("fields = ", fields);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
