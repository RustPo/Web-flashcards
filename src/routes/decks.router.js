const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Deck = require("../views/Deck");
const Finish = require("../views/Finish");
const { Cards, Guesses, Decks, Rounds } = require("../../db/models");

let countGuesses = 0;
let countGuessesCorrect = 0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrFalse = [];

function resetCoint () {
  countGuesses = 0;
  countGuessesCorrect = 0;
  arr.length = 0;
  arr.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  arrFalse.length = 0;
}

router.get("/:id", async (req, res) => {
  resetCoint()
  try {
    const allCards = await Cards.findAll({ where: { deck_id: req.params.id } });
    const result = allCards.map((el) => el.get({ plain: true }));

    const nameDeck = await Decks.findOne({ where: { id: req.params.id } });
    const resDeck = nameDeck.get({ plain: true });

    renderTemplate(Deck, { result: result[0], resDeck, user: req.session?.user }, res);
  } catch (error) {
    console.log(error);
  }
});
router.post("/:id", async (req, res) => {
  try {
    const { card_id, answer } = req.body;
    const check = await Guesses.findOne({ where: { card_id } });
    const resCheck = check.get({ plain: true });

    const allCards = await Cards.findAll({ where: { deck_id: req.params.id } });
    const result = allCards.map((el) => el.get({ plain: true }));

    if (
      resCheck.guess_correct.trim().toLowerCase() ===
        answer.trim().toLowerCase() &&
      arr.length !== 0
    ) {
      countGuesses += 1;
      arr.shift();
      if (arr.length === 0) {
        arr.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

        //проверка на правильный ответ с первого раза
        for (let i = 0; i <= 9; i += 1) {
          if (!arrFalse.includes(i)) {
            countGuessesCorrect += 1;
          }
        }
        // console.log('countGuessesCorrect', countGuessesCorrect);
        await Rounds.create({
          user_id: req.session?.user.id,
          deck_id: req.params.id,
          first_guess_correct: countGuessesCorrect,
          total_guesses: countGuesses,
        });
        countGuesses = 0;
        arrFalse.length = 0;
        countGuessesCorrect = 0;
        res.json({ correctGuess: { status: 309 } });
      }
      res.json({
        correctGuess: { status: 209 },
        nextQuestion: result[arr[0]],
      });
    } else if (
      resCheck.guess_correct.trim().toLowerCase() !==
        answer.trim().toLowerCase() &&
      arr.length !== 0
    ) {
      countGuesses += 1;
      const recurs = arr.shift();
      arrFalse.push(recurs);
      arr.push(recurs);
      res.json({ correctGuess: resCheck, nextQuestion: result[arr[0]] });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/finish/:id", async (req, res) => {
  try {
    if (req.session?.user) {
    const { id } = req.params;
    const { name_deck } = (await Decks.findOne({where: {id}})).get({ plain: true })
      const roundsArr = ((await Rounds.findAll({
        where: { user_id: req.session?.user.id }, order: [['createdAt', 'DESC']],
      })))
        .map((el) => el.get({ plain: true })).shift();
        
      renderTemplate(Finish, { roundsArr, name_deck, user: req.session?.user }, res);
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;