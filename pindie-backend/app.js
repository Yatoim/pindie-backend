const express = require("express");
const app = express();
const cors = require("./middlewares/cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");

const apiRouter = require("./routes/apiRouter");
const pagesRouter = require("./routes/pages");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const cookieParser = require("cookie-parser");

const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "/public"))
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
 
