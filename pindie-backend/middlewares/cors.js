// Список сайтов, которым мы разрешаем обращаться к серверу
const allowedCors = ["https://pindie-moy-proect.nomorepartiesco.ru/"];
  
  function cors(req, res, next) {
      const { origin } = req.headers; // Смотрим, кто стучится к серверу
      if (allowedCors.includes(origin)) { // Если это наш друг,
          res.header('Access-Control-Allow-Origin', origin); // говорим: «Добро пожаловать!»
      }
res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
      next(); // Идём дальше, не задерживаем очередь
  }
  
  module.exports = cors;
