const authRouter = require("express").Router();
const {login, sendIndex} = require("../controllers/auth.js");

authRouter.post("/api/auth/login", login);

module.exports = authRouter;
