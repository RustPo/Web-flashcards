const React = require('react');


module.exports = function Layout({ children, title, user }) {

  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/style/normalize.css" />
        <link rel="stylesheet" href="/style/style.css" />

        <script defer src="/js/decks.js" />

        <title>{title}</title>
      </head>

      <body>
        <header role="banner" className="header mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            { user ? (
              <nav className="nav clearfix no-margin">
                <ul className="no-bullets no-margin no-padding right">
                  <li><h1 className="flashcards">Flashcards</h1></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href="/">Главная</a></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href={`/profile/${user.login}`}><span>{user.userName}</span></a></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href="/login/logout">Выход</a></li>
                </ul>
              </nav>
            ) : (
              <nav className="nav clearfix no-margin">
                <ul className="no-bullets no-margin no-padding right">
                <li><h1 className="flashcards">Flashcards</h1></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href="/">Главная</a></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href="/login/registration">Регистрация</a></li>
                  <li className="pipe-separate t-light-green left"><a className='top-nav' href="/login">Вход</a></li>
                </ul>
              </nav>
            )}
          </div>
        </header>
        <div className="batia bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
