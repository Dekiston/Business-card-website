import {
  BsFillBrightnessHighFill,
  BsFillBrightnessLowFill,
} from "react-icons/bs";
import { Carusel } from "./modules/Carousel.js";
import { AboutMe } from "./modules/AboutMe.js";
import { Skills } from "./modules/Skills.js";
import { Contacts } from "./modules/Contacts.js";
import "./App.scss";
import logo from ".//components/logo.jpg";

const TeleportAbout = () => {
  document.mainWindow.scrollX(-100, 0);
  console.log("Должно телепортировать на X = -100");
};
const TeleportSkills = () => {
  console.log("Должно телепортировать на X = -200");
};
const TeleportContacts = () => {
  console.log("Должно телепортировать на X = -300");
};

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img
            src={logo}
            className="logo"
            alt="Здесь должна быть картинка"
          ></img>
        </div>
        <div className="about">
          <h1 className="Teleport" onClick={TeleportAbout}>
            Обо мне
          </h1>
          <h1 className="Teleport" onClick={TeleportSkills}>
            Мои навыки
          </h1>
          <h1 className="Teleport" onClick={TeleportContacts}>
            Контакты
          </h1>
        </div>
        <BsFillBrightnessHighFill id="Day" />
        <BsFillBrightnessLowFill id="Night" />
      </header>

      <body>
        <div className="carousel">
          <Carusel>
            <div className="aboutPages">
              <h1>Здесь будет информация обо мне</h1>
              <AboutMe></AboutMe>
            </div>

            <div className="skillsPages">
              <Skills></Skills>
            </div>

            <div className="contactsPages">
              <Contacts></Contacts>
            </div>

            <div className="aboutPages">
              <h1>Здесь будет информация обо мне</h1>
            </div>

            <div className="skillsPages">
              <Skills></Skills>
            </div>
          </Carusel>
        </div>
      </body>
    </div>
  );
}

export default App;