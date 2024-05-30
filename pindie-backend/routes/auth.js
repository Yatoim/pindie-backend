// routes/auth.js

const authRouter = require("express").Router();
const { login, sendIndex, sendDashboard} = require("../controllers/auth.js");

authRouter.post("/api/auth/login", login, sendIndex, sendDashboard);

module.exports = authRouter;
