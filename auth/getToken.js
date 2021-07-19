const keys = require('../secret');
const axios = require('axios');

const { client_id, client_secret } = keys;
const redirect_uri = 'http://localhost:5000/';

const getToken = (code, response) => {
  axios.post(`https://api.coinbase.com/oauth/token`, {
    grant_type: "authorization_code",
    code,
    client_id,
    client_secret,
    redirect_uri
  })
    .then(res => {
      console.log('toekn:', res);
      process.env.TOKEN =res.access_token
      process.env.REFRESH_TOKEN = res.refresh_token
      response.send('received token');
    })
    .catch(err => {
      res.send(err)
      console.log(err);
    });

  //process.env.TOKEN
}

module.exports = getToken;