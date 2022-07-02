module.exports = (req, res, next) => {
  res.render("index");
  console.log("banana");
  next();
};
