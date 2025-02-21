const conection = require("../config/database");
const getHomepage = (req, res) => {
  let user = [];
  conection.query("select * from Users", function (err, result, fields) {
    user = result;
    console.log("check result>>>", result);
    console.log("check user>>>: ", user);
    res.send(JSON.stringify(user));
  });
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
};
