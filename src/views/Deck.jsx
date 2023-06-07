const React = require('react');
const Layout = require('./Layout');

function Deck({ result, resDeck, user }) {
  return (
    <Layout title={resDeck.name_deck} user={user}>
      <div id="deckPage">
        <form id="guess" method="post" action={`/decks/${resDeck.id}`}>
          <div className='div-categories'>
            <h2 className='name-categories' id={resDeck.id}>
              Название категории:
              {' '}
              {resDeck.name_deck}
            </h2>
          </div>
          <div className='question-answer'>
            <p className='question-answer-text' id={result.id}>{result.question}</p>
            <p className='question-answer-text' id="hiddenAnswer"></p>
          </div>
          <label htmlFor="guess-input" className="block mar-b-1 inner-guess">Введите ваш ответ:</label>
          <input
            required
            id="guess-input"
            name="guess"
            type="text"
            tabIndex="1"
            placeholder="Ответ"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
          />

          <input
          name='buttonAnswer'
            type="submit"
            value="Отправить ответ"
            tabIndex="2"
            className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
          />
        </form>
      </div>
    </Layout>
  );
}

module.exports = Deck;
