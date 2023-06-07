const indexRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const { Decks } = require('../../db/models');

indexRouter.get('/', (req, res) => {
  res.redirect('/decks');
});

indexRouter.get('/decks', async (req, res) => {
  const data = (await Decks.findAll()).map((el) => el.get({ plain: true }));
  renderTemplate(Home, { data, user: req.session?.user }, res);
});

module.exports = indexRouter;
