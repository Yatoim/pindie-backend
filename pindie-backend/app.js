const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require ('./routes/apiRouter')
const cookieParser = require("cookie-parser");
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const pagesRouter = require ('./routes/pages');
const authRouter = require('./routes/auth');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  authRouter,
  express.static(path.join(__dirname, "public"))
);
 
app.listen(PORT);
 