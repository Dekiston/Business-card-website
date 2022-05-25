
import './App.scss';
import logo from './/components/logo.jpg';

function App() {
  return (
    <div className="App">
      <header id="header">
      <div>
        <img src={logo} class="logo" alt="Здесь должна быть картинка"></img>
      </div>
      <div class = "about">
        <h1>Обо мне</h1>
        <h1>Мои навыки</h1>
        <h1>Контакты</h1>
        <input type="checkbox" class="switch"></input>
      </div>
      </header>
    <body>
       <div>
         <h1>Ger</h1>
        </div>
    </body>
    </div>
  );
}

export default App;
