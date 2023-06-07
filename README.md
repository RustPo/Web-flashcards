## Технологии:

- ### Front-End:

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

- ### Back-End

  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 

- ### Dev
  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

---

## Кратко:

- Мы собираемся создать веб-приложение для флэш-карт. Наше приложение предоставит пользователям возможность использования флэш-карты. Пользователь выберет колоду и сыграет партию с флэш-картами.

---

## Обзор:

*При первом запуске вас встретит небольшое описание и правила игры!*

![alt text](readme-assets/1.png)
**Рисунок 1. Правила игры**

*Чтобы начать вам нужно авторизоваться*

![alt text](readme-assets/3.png)
**Рисунок 2. Регистрация**

![alt text](readme-assets/2.png)
**Рисунок 3. Авторизация**

*Вы можете выбрать любую колоду для игры*

![alt text](readme-assets/4.png)
**Рисунок 4. Главная страница**

![alt text](readme-assets/5.png)
**Рисунок 5. Игра**

*После окончания игры вы увидите статистику текущей игры*

![alt text](readme-assets/6.png)
**Рисунок 6. Статистика после игры**

*Вы можете зайти в свой профиль и посмотреть статистику о прошлых играх, а также результаты последней игры*

![alt text](readme-assets/7.png)
**Рисунок 7. Профиль**

---



## Запуск \*

**Вам понадобится СУБД PostgreSQL**

1. В папке проекта выполните:

```bash
npm i
```

2. В корне проекта создайте файл .env и заполните его по примеру из файла .env-example

```js
// .env-example

DATABASE = "postgres://user:pass@example.com:5432/dbname"; // измените user, pass, url и dbname
PORT = 3000; // любой порт
COOKIE = qwerty123; // любое значение
```

3. Затем создайте базу данных с помощью терминала:

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

3. В корне проекта запустите приложение:

```bash
npm start
```


## Powered by:
- [TaRRaba](https://github.com/TaRRaba)
- [NPetrovna](https://github.com/NPetrovna)
- [Brekyt](https://github.com/Brekyt)
- [RustPo](https://github.com/RustPo)