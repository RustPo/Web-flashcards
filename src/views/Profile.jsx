/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');


module.exports = function Profile({ userName, name_deck, roundsArr, user }) {
  if (roundsArr.length < 1) {
    return (
      <>
        {user?.login ? (
      <Layout title={userName} user={user}>
       <div className='div-profile'>
        <h2 className='profile-text'>
          Привет,
          {' '}
          {userName}
        </h2>

        <h2 className='profile-text'>Здесь пока нет статистики ...</h2>
        <h2 className='profile-text'>
          Go
          {' '}
          <a className='referense-play' href="/">play</a>
          !
        </h2>
        </div>
      </Layout>
        ) : (
          <Layout title="Главная" user={user}>
          <div className='waiting-room'>
          <h5 className='waiting'>Пожалуйста войдите или зарегистрируйтесь.</h5>
        </div>
        </Layout>
        )
  }
  </>
    );
  }
  const { createdAt, first_guess_correct, total_guesses } = roundsArr.shift();
  return (
    <>
    {user?.login ? (
    <Layout title={userName} user={user}>
      <div className='div-profile3'>
      <h2 className='profile-welcome'>
        Привет,
        {' '}
        {userName}
      </h2>

      <h3 className='profile-text3'>Последний раз вы играли в <span id="deck-name">{name_deck}</span>:</h3>
      <table>

        <tr>
          <th className='table-column'>Дата / время</th>
          <th className='table-column'>Карт в колоде</th>
          <th className='table-column'>Карт угадано с первой попытки</th>
          <th className='table-column'>Число попыток</th>
        </tr>
        <tr>
          <td className='table-column'>{createdAt.toString().slice(0, 24)}</td>
          <td className='table-column'>5</td>
          <td className='table-column'>{first_guess_correct}</td>
          <td className='table-column'>{total_guesses}</td>
        </tr>
        
      </table>
      <h3 className='profile-text3'>Прошлые игры:</h3>
      <table>
        <tr>
          <th className='table-column'>Дата / время</th>
          <th className='table-column'>Карт в колоде</th>
          <th className='table-column'>Карт угадано с первой попытки</th>
          <th className='table-column'>Число попыток</th>
        </tr>
        {
            roundsArr.map(({ createdAt, first_guess_correct, total_guesses }) => (
              <tr>
                <td className='table-column'>{createdAt.toString().slice(0, 24)}</td>
                <td className='table-column'>5</td>
                <td className='table-column'>{first_guess_correct}</td>
                <td className='table-column'>{total_guesses}</td>
              </tr>
            ))
        }
      </table>
      </div>
    </Layout>
            ) : (
              <Layout title="Главная" user={user}>
              <div className='waiting-room'>
              <h5 className='waiting'>Пожалуйста войдите или зарегистрируйтесь.</h5>
            </div>
            </Layout>
            )
      }
        </>
  );
};
