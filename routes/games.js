// Файл routes/games.js

const gamesRouter = require('express').Router();
const {checkAuth} = require("../middlewares/auth.js");

const {findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, findGameById, checkIfUsersAreSafe, updateGame, deleteGame, checkIsVoteRequest} = require ('../middlewares/games')
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require ('../controllers/games')
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated,
  checkIsVoteRequest
);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated,
  sendGameById
); 
  gamesRouter.delete(
    "/games/:id",
    checkAuth, // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  );
  
module.exports = gamesRouter;