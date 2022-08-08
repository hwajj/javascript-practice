const express = require('express');
const path = require('path');

const app = express();

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

//지정된 콜백함수로 HTTP GET요청을 지정된 경로로 라우팅
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(5050, () => {
  console.log(process.env.PORT);
  console.log('Server  ...');
});
