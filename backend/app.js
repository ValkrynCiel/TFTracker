const express = require('express');
const cors = require('cors');
const app = express();

const ExpressError = require('./expressError');

require('dotenv').config()

const Summoner = require('./classes/Summoner');
const Match = require('./classes/Match');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/summoners/search-by-name', async function (req, res, next) {
  console.log(req.query.name)
  let summoner = await Summoner.fetch(req.query.name);
  await Promise.all([
    summoner.fetchRankedData(),
    summoner.fetchMatchHistoryInfo()
  ]);
  return res.json({ summoner });
})

app.get('/summoners/search-by-match', async function (req, res, next) {
  let { name, puuid, profileIconId } = req.query;
  let summoner = await new Summoner({ name, puuid, profileIconId });
  await summoner.fetchMatchHistoryInfo();

  return res.json({ summoner });
})

app.get('/match/details', async function (req, res, next) {
  let match = await Match.fetch(req.query.id);
  await match.fetchParticipantDetails();

  return res.json({ match })
})

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

app.listen(process.env.PORT || 3001, async () => {
  console.log('listening')
});
