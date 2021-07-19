const express = require('express');
const path = require('path')

const getToken = require('../auth/getToken.js')

const app = express();

app.use(express.json()); 

app.use('/', express.static(path.join(__dirname, "../public")));

app.get('/test', (req, res) => {
  res.sendFile("index.html", { root: __dirname });
})

app.post('/auth', (req, res) => {
  const { code } = req.body;
  if (code) {
    getToken(code, res)
  } else {
    res.send('not valid login')
  }

})

app.listen(5000, () => {
  console.log('listening at 5000')
})

