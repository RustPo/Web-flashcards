/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   'Users',
    //   [
    //     { userName: 'Ivan', login: 'poput', password: '123' },
    //     { userName: 'Vadim', login: 'li', password: '123' },
    //   ],
    //   {},
    // );

    await queryInterface.bulkInsert(
      "Decks",
      [
        { name_deck: "Фильмы" },
        { name_deck: "Авто" },
        { name_deck: "Мультики" },
        { name_deck: "Еда" },
        { name_deck: "Физика" },
        { name_deck: "Космос" },
        { name_deck: "Спорт" },
        { name_deck: "Комиксы" },

      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Cards",
      [
        { deck_id: 1, question: 'Какой город наводнен призраками в "Охотниках за привидениями"?' },
        { deck_id: 1, question: 'Кто спел "My Heart Will Go On" в "Титанике"?' },
        { deck_id: 1, question: 'Кто на самом деле рисовал Розу в "Титанике"?' },
        { deck_id: 1, question: "За какой фильм дали оскара Леонардо Дикаприо?" },
        { deck_id: 1, question: 'Где снимали трилогию "Властелин колец"?' },
        { deck_id: 1, question: 'Какого ученого звания неожиданно для себя удостоился скромный директор детского сада в х/ф "Джентльмен удачи"?' },
        { deck_id: 1, question: 'В скольких номинациях получил «Оскара» фильм «Титаник»?' },
        { deck_id: 1, question: 'Из какой страны двинулся завоевывать Америку Жан Клод Ван Дамм?' },
        { deck_id: 1, question: 'Кто был режиссером-постановщиком фильма «Пятый элемент»?' },
        { deck_id: 1, question: 'Какой советский фильм первым получил «Оскара», как лучший иностранный фильм?' },

        { deck_id: 2, question: "Страна производитель автомобилей Skoda?" },
        { deck_id: 2, question: "Сколько брендов входят в состав концерна VAG?" },
        { deck_id: 2, question: "Какая модель бренда Audi имеет прозвище «бочка»?" },
        { deck_id: 2, question: "Какая модель бренда Audi имеет прозвище «сигара»?" },
        { deck_id: 2, question: "Страна производитель автомобилей Kia?" },
        { deck_id: 2, question: "Как по-другому назывался легковой автомобиль ГАЗ-М-20, который выпускался в России после окончания Второй мировой войны?" },
        { deck_id: 2, question: "Как первоначально хотели назвать популярный автомобиль «Победа»?" },
        { deck_id: 2, question: "С какого года выпускается автомобиль «Волга»?" },
        { deck_id: 2, question: "В каком городе в 1899 году были выданы первые номерные знаки?" },
        { deck_id: 2, question: "В какой стране в 1957 году впервые появились в автомобилях ремни безопасности?" },

        { deck_id: 3, question: "Как назвал ресторан повар Лингвини?" },
        { deck_id: 3, question: 'В какой стране происходят действия мультфильма "Тайна Коко"?' },
        { deck_id: 3, question: 'Что приносит больше энергии в "Корпорации монстров"?' },
        { deck_id: 3, question: 'Какой предмет вёл в школе учитель в мультфильме "Душа"?' },
        { deck_id: 3, question: 'Как зовут главную героиню мультфильма "Холодное сердце"?' },
        { deck_id: 3, question: 'Кто был отцом панды По в м/ф «Кунг-фу панда»?' },
        { deck_id: 3, question: 'Кто был питомцем и верным другом Рапунцель?' },
        { deck_id: 3, question: 'Как зовут паучка, который живёт в квартире и наблюдает за фиксиками?' },
        { deck_id: 3, question: 'Как зовут дождевого червя, инженера, шахтера и изобретателя из мультика про Лунтика?' },
        { deck_id: 3, question: 'Как зовут краба, друга Ариэль из м/ф «Русалочка»?' },

        { deck_id: 4, question: "Белочка весёлое существо скачущее по веткам. Любит орешки, а ещё в СССР был продукт с таким названием. Это — ..." },
        { deck_id: 4, question: "Какой же вкусный этот клубничный, плодово-ягодный брикет. Что за чудо продукт,  который любили почти все дети?" },
        { deck_id: 4, question: "Её выменивали на машинки, выигрывали в «ножички».  Она была в ходу даже совсем потеряв вкус. А ещё с ней после употребления играли в фантики. Что за универсальная валюта детства?" },
        { deck_id: 4, question: "Что становится в два раза вкуснее и коричневого цвета, если её сварить?" },
        { deck_id: 4, question: "Как называлась газировка на основе лечебных трав?" },
        { deck_id: 4, question: "Скажите по-немецки «хлеб с маслом»" },
        { deck_id: 4, question: "Название какого фрукта восходит к латинскому языку и буквально значит «скороспелый»?" },
        { deck_id: 4, question: "Сырье для какого напитка бывает черным и зеленым?" },
        { deck_id: 4, question: "Назовите кулинарное украшение для ушей" },
        { deck_id: 4, question: "Скажите по-французски «палка»" },
        
        { deck_id: 5, question: "Что такое физика?" },
        { deck_id: 5, question: "Как зовут знаменитого физика, который открыл теорию относительности?" },
        { deck_id: 5, question: "Как зовут знаменитого ученого, который открыл закон всеобщего тяготения?" },
        { deck_id: 5, question: "Как называется единица измерения силы тока?" },
        { deck_id: 5, question: "Как называется единица измерения частоты звука?" },
        { deck_id: 5, question: "Как называется единица измерения силы света?" },
        { deck_id: 5, question: "Как называется единица измерения теплоты?" },
        { deck_id: 5, question: "Как называется раздел физики, изучающий движение тел?" },
        { deck_id: 5, question: "Как называется отрицательно заряженная элементарная частица?" },
        { deck_id: 5, question: "Что такое вибрация воздуха?" },

        { deck_id: 6, question: "Как называется ближайшая к Земле планета?" },
        { deck_id: 6, question: "Как называется самая большая планета в Солнечной системе? " },
        { deck_id: 6, question: "Какой цвет имеет Млечный Путь?" },
        { deck_id: 6, question: "Что такое галактика?" },
        { deck_id: 6, question: "Какой самый большой спутник в солнечной системе?" },
        { deck_id: 6, question: "Какой самая яркая звезда на небе?" },
        { deck_id: 6, question: "Назовите самую высокую гору на Марсе" },
        { deck_id: 6, question: "Сколько минут в космосе провел Ю.А. Гагарин?" },
        { deck_id: 6, question: "Сколько раз Ю.А. Гагарин облетел земной шар?" },
        { deck_id: 6, question: "Все ли звезды излучают свет?" },

        { deck_id: 7, question: "Что за гонка Тур де Франс?" },
        { deck_id: 7, question: "Какая единственная страна принимала участие во всех чемпионатах мира по футболу?" },
        { deck_id: 7, question: "Каков рекорд по количеству красных карточек в одном футбольном матче?" },
        { deck_id: 7, question: "Какой город первым дважды принимал Олимпиаду?" },
        { deck_id: 7, question: "В каком году женщинам было разрешено участвовать в современных Олимпийских играх?" },
        { deck_id: 7, question: "Сколько длился самый длинный розыгрыш очка в истории тенниса?" },
        { deck_id: 7, question: "Кто самый молодой чемпион мира по боксу в супертяжелом весе?" },
        { deck_id: 7, question: "Сколько игроков в бейсбольной команде?" },
        { deck_id: 7, question: "Под каким именем более известен футболист Эдсон Арантес ду Насименту?" },
        { deck_id: 7, question: "Какой вид спорта наиболее известен как «король спорта»?" },

        { deck_id: 8, question: "Какой врач по профессии Доктор Стрэндж?" },
        { deck_id: 8, question: "Как зовут дворецкого Бэтмена?" },
        { deck_id: 8, question: "Как называется родная планета Таноса?" },
        { deck_id: 8, question: "Как назывался металл в костях Росомахи?" },
        { deck_id: 8, question: "Какого персонажа любит Танос?" },
        { deck_id: 8, question: "Кто из перечисленных супергероев говорит: «Не зли меня. Я не понравлюсь тебе злым»?" },
        { deck_id: 8, question: "Супермен персонаж с какой планеты?" },
        { deck_id: 8, question: "Какой город защищает Супермен?" },
        { deck_id: 8, question: "Какой персонаж из «Стражей галактики» управляет своей стрелой?" },
        { deck_id: 8, question: "Какой супергерой на самом деле быстрее Супермена?" },

      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Guesses",
      [
        { card_id: 1, guess_correct: "Нью-Йорк" },
        { card_id: 2, guess_correct: "Селин Дион" },
        { card_id: 3, guess_correct: "Джеймс Кэмерон" },
        { card_id: 4, guess_correct: "Выживший" },
        { card_id: 5, guess_correct: "Новая Зеландия" },
        { card_id: 6, guess_correct: "Доцент" },
        { card_id: 7, guess_correct: "11" },
        { card_id: 8, guess_correct: "Бельгия" },
        { card_id: 9, guess_correct: "Люк Бессон" },
        { card_id: 10, guess_correct: "Война и мир" },

        { card_id: 11, guess_correct: "Чехия" },
        { card_id: 12, guess_correct: "10" },
        { card_id: 13, guess_correct: "80" },
        { card_id: 14, guess_correct: "100" },
        { card_id: 15, guess_correct: "Южная Корея" },
        { card_id: 16, guess_correct: "Победа" },
        { card_id: 17, guess_correct: "Родина" },
        { card_id: 18, guess_correct: "1957" },
        { card_id: 19, guess_correct: "Мюнхен" },
        { card_id: 20, guess_correct: "Швеция" },

        { card_id: 21, guess_correct: "Рататуй" },
        { card_id: 22, guess_correct: "Мексика" },
        { card_id: 23, guess_correct: "Детский смех" },
        { card_id: 24, guess_correct: "Музыка" },
        { card_id: 25, guess_correct: "Эльза" },
        { card_id: 26, guess_correct: "Гусь" },
        { card_id: 27, guess_correct: "Хамелеон" },
        { card_id: 28, guess_correct: "Жучка" },
        { card_id: 29, guess_correct: "Корней Корнеевич" },
        { card_id: 30, guess_correct: "Себастьян" },

        { card_id: 31, guess_correct: "Конфеты" },
        { card_id: 32, guess_correct: "Кисель" },
        { card_id: 33, guess_correct: "Жевательная резинка" },
        { card_id: 34, guess_correct: "Сгущенка" },
        { card_id: 35, guess_correct: "Байкал" },
        { card_id: 36, guess_correct: "Бутерброд" },
        { card_id: 37, guess_correct: "Абрикос" },
        { card_id: 38, guess_correct: "Чай" },
        { card_id: 39, guess_correct: "Лапша" },
        { card_id: 40, guess_correct: "Батон" },

        { card_id: 41, guess_correct: "Наука" },
        { card_id: 42, guess_correct: "Эйнштейн" },
        { card_id: 43, guess_correct: "Ньютон" },
        { card_id: 44, guess_correct: "Ампер" },
        { card_id: 45, guess_correct: "Герц" },
        { card_id: 46, guess_correct: "Люкс" },
        { card_id: 47, guess_correct: "Джоуль" },
        { card_id: 48, guess_correct: "Механика" },
        { card_id: 49, guess_correct: "Электрон" },
        { card_id: 50, guess_correct: "Звук" },

        { card_id: 51, guess_correct: "Венера" },
        { card_id: 52, guess_correct: "Юпитер" },
        { card_id: 53, guess_correct: "Белый" },
        { card_id: 54, guess_correct: "Скопление звезд" },
        { card_id: 55, guess_correct: "Ганимед" },
        { card_id: 56, guess_correct: "Сириус" },
        { card_id: 57, guess_correct: "Олимп" },
        { card_id: 58, guess_correct: "108" },
        { card_id: 59, guess_correct: "1" },
        { card_id: 60, guess_correct: "Да" },

        { card_id: 61, guess_correct: "Велогонка" },
        { card_id: 62, guess_correct: "Бразилия" },
        { card_id: 63, guess_correct: "36" },
        { card_id: 64, guess_correct: "Париж" },
        { card_id: 65, guess_correct: "1900" },
        { card_id: 66, guess_correct: "29" },
        { card_id: 67, guess_correct: "Майк Тайсон" },
        { card_id: 68, guess_correct: "9" },
        { card_id: 69, guess_correct: "Пеле" },
        { card_id: 70, guess_correct: "Футбол" },

        { card_id: 71, guess_correct: "Нейрохирург" },
        { card_id: 72, guess_correct: "Альфред" },
        { card_id: 73, guess_correct: "Титан" },
        { card_id: 74, guess_correct: "Адамантий" },
        { card_id: 75, guess_correct: "Смерть" },
        { card_id: 76, guess_correct: "Халк" },
        { card_id: 77, guess_correct: "Криптон" },
        { card_id: 78, guess_correct: "Метрополис" },
        { card_id: 79, guess_correct: "Йонду" },
        { card_id: 80, guess_correct: "Флэш" },

      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Users",
      [{ userName: "User 1", login: "qwerty", password: "123" }],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
    await queryInterface.bulkDelete("Cards", null, {});
    await queryInterface.bulkDelete("Guesses", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
