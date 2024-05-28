// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();
const {checkAuth} = require('../middlewares/auth')
// Импортируем вспомогательные функции
const {findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, findUserById, checkEmptyNameAndEmail, updateUser, deleteUser, filterPassword, hashPassword} = require ('../middlewares/users')
const {sendUserCreated, sendAllUsers, sendUserUpdated, sendUserDeleted, sendUserById, sendMe} = require ('../controllers/user')

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth,sendMe);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
  "/users/:id",
  checkAuth,
  deleteUser,
  sendUserDeleted
); 

module.exports = usersRouter