const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ data, user }) {
  return (
    <Layout title="Главная" user={user}>
      {user?.userName ? (
        <div className="title">
          <h2 className='select'>Выбери колоду</h2>
          <div className="decks_container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {data && data.map(({ id, name_deck }) => (
              <div id={`deck${id}`}className="deck">
                <a href={`/decks/${id}`}><h5 className="deck-inner">{name_deck}</h5></a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='waiting-room'>
          <h2 className='waiting'>Flashcards - интелектуальная игра на различные темы, выберите колоду и ответьте на все вопросы с флэш-карт.</h2>
          <ul > <h2 className='waiting'>Правила игры: </h2>
            <li className='waiting'>
            После того, как Вы выбирете колоду, начинается партия. 
            </li>
            <li className='waiting'>
            Вы отвечаете на вопросы каждой карты в колоде, указывая ответ в поле ввода.
            </li>
            <li className='waiting'>
            После ввода и отправки ответа Вы узнаете, верно ли ответили на карту.
            </li>
            <li className='waiting'>
            Игра продолжается до тех пор, пока каждая карта не будет отгадана правильно - при неправильном ответе карты отображаются повторно.
            </li>
          </ul>
          <h2 className='waiting'> Для начала игры пожалуйста <a href="/login">войдите</a>  или <a href="/login/registration">зарегистрируйтесь</a>.</h2>
        </div>
      )}

    </Layout>
  );
};
