const app = require('./app');
const { PORT } = require('./config');
app.listen(PORT, function () {
  console.log(`express server started listern to the port ${PORT}`);
});
