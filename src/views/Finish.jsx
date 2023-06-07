/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Finish({ roundsArr, name_deck, user }) {
  const { createdAt, first_guess_correct, total_guesses } = roundsArr;
  return (
    <Layout title={name_deck} user={user}>
      <div className='div-profile2'>
      <h2 className='profile-text2'>
        Вы отгадали колоду -
        {' '}
        {name_deck}
      </h2>

      <h3 className='name-stats'>Статистика вашей игры</h3>
      <table>
        <tr>
          <th className='table-column'>Дата / время</th>
          <th className='table-column'>Карт в колоде</th>
          <th className='table-column'>Карт угадано с первой попытки</th>
          <th className='table-column'>Число попыток</th>
        </tr>
        <tr>
          <td className='table-column'>{createdAt.toString().slice(0, 24)}</td>
          <td className='table-column'>10</td>
          <td className='table-column'>{first_guess_correct}</td>
          <td className='table-column'>{total_guesses}</td>
        </tr>
      </table>
      </div>
    </Layout>
  );
};
