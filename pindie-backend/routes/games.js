const gamesRouter = require("express").Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists} = require("../middlewares/games");
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {checkAuth, checkCookiesJWT} = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkAuth, checkIsGameExists, createGame, sendGameCreated)
gamesRouter.put("/games/:id", checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;