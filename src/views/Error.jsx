const React = require('react');
const Layout = require('./Layout');

module.exports = function Error({ type, user }) {
  if (type === 'login') {
    return (
      <Layout title="Регистрация" user={user}>
        <div className="d-flex flex-column align-items-center register1">
          <h5 className="text-danger ">Такой login уже зарегистрирован!</h5>
        </div>
      </Layout>
    );
  } if (type === 'password') {
    return (
      <Layout title="Вход" user={user}>
        <div className="d-flex flex-column align-items-center register1">
          <h5 className="text-danger">Неверный login или пароль!</h5>
        </div>
      </Layout>
    );
  }
};
