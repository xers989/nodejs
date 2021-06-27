const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello, Node Express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), ' is waiting');
});
