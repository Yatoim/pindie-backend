// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/games");

// middlewares/games.js

const findAllGames = async (req, res, next) => {
  console.log('Executing findAllGames middleware');
  if (req.query["categories.name"]) { 
    req.gamesArray = await games.findGameByCategory(req.query["categories.name"]);
    console.log('Found games by category:', req.gamesArray);
    next();
    return;
  }
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password"
    });
  console.log('Found all games:', req.gamesArray);
  next();
};

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating game");
  }
};
const findGameById = async (req, res, next) => {
  try {
      // Пробуем найти игру по id
    req.game = await games
      .findById(req.params.id) // Поиск записи по id
      .populate("categories") // Загрузка связанных записей о категориях
      .populate("users"); // Загрузка связанных записей о пользователях
    next(); // Передаём управление в следующую функцию
  } catch (error) {
    res.status(404).send({ message: "Игра не найдена" });
  }
};
const updateGame = async (req, res, next) => {
  try {
      // В метод передаём id из параметров запроса и объект с новыми свойствами
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления игры" });
  }
};
const deleteGame = async (req, res, next) => {
  try {
    // Методом findByIdAndDelete по id находим и удаляем документ из базы данных
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting game" });
  }
};
const checkEmptyFields = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.image ||
    !req.body.link ||
    !req.body.developer
  ) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполните все поля" }));
  } else {
    next();
  }
};
const checkIfCategoriesAvaliable = async (req, res, next) => {
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
  } else {
    next();
  }
};
const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
  }
};
const checkIsGameExists = async (req, res, next) => {
  const isInArray = req.gamesArray.find((game) => {
    return req.body.title === game.title;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Игра c таким названием уже существует" }));
  } else {
    next();
  }
};const checkIsVoteRequest = async (req, res, next) => {
  // Если в запросе присылают только поле users
if (Object.keys(req.body).length === 1 && req.body.users) {
  req.isVoteRequest = true;
}
next();
}; 
module.exports = {findAllGames, createGame, findGameById, updateGame, checkEmptyFields, deleteGame, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest}