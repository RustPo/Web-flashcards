const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout title="Регистрация">
      <div>
        <form action="/login/registration" method="POST">
          <div className="d-flex flex-column my-4 align-items-center div-input-reg">
            <h3 className='profile-text'>Введите данные для регистрации:</h3>
          </div>
          <div className="">
            <div className="mb-3">
              <input id="guess-input-reg" name="userName" required="required" type="text" placeholder="Username" className="block w-100 no-outline no-border pad-1 mar-b-2" />
            </div>
            <div className="mb-3">
              <input id="guess-input-reg"name="login" required="required" type="text" placeholder="Login" className="block w-100 no-outline no-border pad-1 mar-b-2" />
            </div>
            <div className="mb-3">
              <input id="guess-input-reg"name="password" required="required" type="password" placeholder="Password" className="block w-100 no-outline no-border pad-1 mar-b-2" />
            </div>
            <div className="flex">
              <button type="submit" className="button-reg block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">Регистрация</button>
              <input type="reset" className="button-reg block buttonClear w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline" value="Очистить" />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
