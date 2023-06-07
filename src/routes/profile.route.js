/* eslint-disable max-len */
/* eslint-disable camelcase */
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Users, Rounds, Decks } = require('../../db/models');
const Profile = require('../views/Profile');

module.exports = router.get('/:login', async (req, res) => {
  try {
    const { login } = req.params;
    const user = (await Users.findOne({ where: { login } }));

    if (!user) return res.send('403 User not found!');

    const { userName, id } = user.get({ plain: true });

    const roundsArr = ((await Rounds.findAll({
      where: { user_id: id }, order: [['createdAt', 'DESC']],
    })))
      .map((el) => el.get({ plain: true }));

    if (roundsArr.length) {
      const { name_deck } = (await Decks.findOne({ where: { id: roundsArr[0].deck_id } })).get({ plain: true })
      renderTemplate(Profile, { userName, name_deck, roundsArr, user: req.session?.user }, res);
    } else {
      const name_deck = ''
      renderTemplate(Profile, { userName, name_deck, roundsArr, user: req.session?.user }, res);
    }
  } catch (error) {
    console.log(error);
  }
});
