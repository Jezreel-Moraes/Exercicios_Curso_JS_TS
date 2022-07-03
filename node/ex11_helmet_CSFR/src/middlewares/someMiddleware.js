module.exports = (req, res, next) => {
  res.locals.someVariable = "valor local em toda rota";
  next();
};
