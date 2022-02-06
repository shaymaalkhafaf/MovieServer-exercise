const express = require("express");
const app = express();
const port = 3000;

const es6render = require("express-es6-template-engine");
app.engine("html", es6render);
app.set("views", "views");
app.set("view engine", "html");

const db = require("./model/db");
// console.log(db);

const indexRouter = require("./routes/index");
const showsRouter = require("./routes/shows");
const titlesRouter = require("./routes/showsTitle");

//ROUTES

app.use("/", indexRouter);
app.use("/shows", showsRouter);
app.use("/shows/:title", titlesRouter);

//END ROUTES

app.listen(port, () => {
  console.log(`server set up at http://localhost:${port}/`);
});