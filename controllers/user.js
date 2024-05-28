const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(req.userArray));
}
const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendCategoryUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Пользователь обновлен" });
};
const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
// Файл controllers/games.js

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Пользователь обновлен" });
};
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
module.exports = {sendUserCreated, sendUserById, sendCategoryUpdated, sendUserDeleted, sendAllUsers, sendUserUpdated, sendMe}
