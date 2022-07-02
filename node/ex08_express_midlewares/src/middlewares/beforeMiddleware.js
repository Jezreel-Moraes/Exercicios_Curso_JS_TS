module.exports = (req, res, next) => {
  console.log("beforeMiddleware says -> antes da banana");
  next();
};
