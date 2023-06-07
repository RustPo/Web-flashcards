const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registration');
const Login = require('../views/Login');
const { Users } = require('../../db/models');
const Error = require('../views/Error');

usersRouter.get('/registration', (req, res) => {
  renderTemplate(Registration, {}, res);
});

usersRouter.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

usersRouter.post('/registration', async (req, res) => {
  const { userName, login, password } = req.body;
  try {
    const loginCheck = await Users.findOne({ where: { login } });
    if (!loginCheck) {
      const hashPass = await bcrypt.hash(password, 10);
      await Users.create({ userName, login, password: hashPass });
      res.redirect('/login');
    } else {
      renderTemplate(Error, { type: 'login' }, res);
    }
  } catch (error) {
    res.send(error);
  }
});

usersRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const data = await Users.findOne({ where: { login } });
    if (data) {
      const user = data.get({ plain: true });
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user;
        res.redirect('/');
      } else {
        renderTemplate(Error, { type: 'password' }, res);
      }
    } else {
      renderTemplate(Error, { type: 'password' }, res);
    }
  } catch (error) {
    res.send(error);
  }
});

usersRouter.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) console.log(error);
    else {
      res.clearCookie('FlashCook');
      res.redirect('/');
    }
  });
});

module.exports = usersRouter;
