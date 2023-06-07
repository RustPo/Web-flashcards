/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// Импортируем созданный в отдельный файлах рутеры.
// Тут будут роутеры
const indexRouter = require('./src/routes/index');
const profileRouter = require('./src/routes/profile.route');

const decksRouter = require('./src/routes/decks.router');

const usersRouter = require('./src/routes/users');

const sessionConfig = {
  name: 'FlashCook',
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.COOKIE,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: false,
  },
};

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/decks', decksRouter);
app.use('/login', usersRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is starting on PORT = ${PORT}`);
});

// Серега
// Домашняя страница - '/' => redirect на '/decks'
// login = '/login'
// registration - '/login/registration'

// Наташа и Саша
// колода - '/decks/:id
// конец игры - redirect на '/finish'

// Денис
// профиль - '/profile/:id'
