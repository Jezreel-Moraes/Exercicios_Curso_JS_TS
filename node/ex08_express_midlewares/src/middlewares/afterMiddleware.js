module.exports = (req, res, next) => {
  console.log("afterMiddleware says -> depois da banana");
  next();
};
