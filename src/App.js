
import './App.css';
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
      </div>
      </header>

      <div class="flex">
      <div class="bcblue"><div><h1>Первый блок</h1></div></div>
      
      <div class="bcred"><h1>Второй блок</h1></div>
      
      </div>

      <div>
      <h1>Привет, мир!</h1>
      
      
      </div>
    </div>
  );
}

export default App;
