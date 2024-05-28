  // Создаём роут для запросов категорий 
  const categoriesRouter = require('express').Router();
  const {checkAuth} = require('../middlewares/auth')
const {
  findAllCategories,
  checkEmptyName,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists
} = require ('../middlewares/categories')
const {sendCategoryById, sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require ('../controllers/categories')
  // Импортируем вспомогательные функции
  categoriesRouter.get("/categories", findCategoryById, sendCategoryById, sendAllCategories);
  // Обрабатываем GET-запрос с роутом '/categories'
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  );
  categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
  ); 
  // Экспортируем роут для использования в приложении — app.js
  module.exports = categoriesRouter;
  