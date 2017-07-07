module.exports = (role) => {
  return (req, res, next) => {

    const token = req.headers['authorization'];

    if (token !== 'ABC123' || role !== 'Admin') {
      res.statusCode = 403;
      return res.json({
        msg: 'User has to be admin',
      });
    }

    next();
  };
};
