module.exports = (req, res, next) => {

  const token = req.headers['authorization'];

  if (token !== 'ABC123') {
    res.statusCode = 401;
    return res.json({
      msg: 'Bad Token',
    })
  }

  next();
};
