// routes/pages.js
const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controllers/auth.js");
const {checkCookiesJWT, checkAuth} = require('../middlewares/auth.js')
pagesRouter.get("/", sendIndex);
// routes/pages.js
// Импорты и другие маршруты

pagesRouter.get("/admin/**", sendDashboard);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 
module.exports = pagesRouter