const app = require('./server/app');

const port=Number(process.env.PORT || 3000);

process.env.NODE_ENV = 'development';

app.listen(port, () => {
  console.log('Listening');
});
