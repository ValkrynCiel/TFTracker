const express = require('express');
const app = express();

const ExpressError = require('./expressError');

require('dotenv').config()

const API = require('./API');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/summoners/by-name', async function (req, res, next) {
  let summoner = await API.findSummonerByName(req.query.name)
  return res.json({summoner});
})

app.get('/summoners/by-puuid', async function (req, res, next) {
  let summoner = await API.findSummonerByPUUID(req.query.puuid)
  return res.json({summoner});
})

app.get('/match-history')

app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});


app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3001, async () => {
  console.log('listening on 3001')
});
