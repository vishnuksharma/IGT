const User = require('../../models/User');

module.exports = (app) => {
  app.get('/getuser', (req, res, next) => {
    // console.log(User);
    res.json(User)
  });

  
};
