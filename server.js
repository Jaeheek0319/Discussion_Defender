const express = require("express");
const PORT = process.env.PORT || 4001;
//const sequelize = require("./config/connection");
const app = express();
const routes  = require("./routes")

//body parsers
app.use(express.json()); //configure request to accept json
app.use(express.urlencoded({extended:true})) // configure request to accept arrays and string

app.use(routes);

//sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT} ...`);
  });
//});
