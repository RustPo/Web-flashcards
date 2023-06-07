const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Вход">
      <div>
        <form action="/login" method="POST">
          <div className="d-flex flex-column my-4 align-items-center div-input">
            <h3 className='profile-text'>Введите данные для входа:</h3>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <input id="guess-input-reg" name="login" required="required" type="text" placeholder="Login" className="block w-100 no-outline no-border pad-1 mar-b-2" />
            </div>
            <div className="mb-3">
              <input id="guess-input-reg" name="password" required="required" type="password" placeholder="Password" className="block w-100 no-outline no-border pad-1 mar-b-2" />
            </div>
            <div className="flex">
              <button type="submit" className="button-reg block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">Войти</button>
              <input type="reset" className="button-reg block buttonClear w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline" value="Очистить" />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
