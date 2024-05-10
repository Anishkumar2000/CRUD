const express = require("express");
const db = require("./model/db.index");
const { createadmin } = require("./controller/admin.con");
const app = express();

const port = 8000;

db.sequelize.sync().then(() => {
  console.log("db conncted successfully");
});

app.post("/admin", createadmin);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
