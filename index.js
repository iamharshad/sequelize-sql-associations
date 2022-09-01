import express from "express";
import bodyParser from "body-parser"; // used for parsing form data

import router from "./routes/routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
