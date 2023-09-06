const { Router } = require('express');
const authRouter = Router();
authRouter.get('/login/', function (req, res, next) {
  res.status(200).json({
    success: true,
    message: req.url
  });
});
module.exports = authRouter;
