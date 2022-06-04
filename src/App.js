
import {Carusel} from './Carousel.js';
import './App.scss';
import logo from './/components/logo.jpg';

import { BsFillBrightnessHighFill, BsFillBrightnessLowFill } from "react-icons/bs";
import { FaSkype, FaLinkedin, FaTelegram, FaGithub, FaLink } from 'react-icons/fa';
import { MdPersonSearch, MdMail  } from "react-icons/md";


const TeleportAbout = () => {console.log ('Должно телепортировать на X = -100')}
const TeleportSkills = () => {console.log ('Должно телепортировать на X = -200')}
const TeleportContacts = () => {console.log ('Должно телепортировать на X = -300')}

function App() {
  return (
    <div className="App">
      
      <header>
      <div>
        <img src={logo} className="logo" alt="Здесь должна быть картинка"></img>
      </div>
      <div className= "about">
        <h1 className='Teleport' onClick={TeleportAbout}>Обо мне</h1>
        <h1 className='Teleport' onClick={TeleportSkills}>Мои навыки</h1>
        <h1 className='Teleport' onClick={TeleportContacts}>Контакты</h1>
      </div>
      <BsFillBrightnessHighFill id='Day'/>
      <BsFillBrightnessLowFill id='Night'/>
      </header>

    <body>
       <div className= 'carousel'>
         <Carusel>
           <div className='contactsPages'><h1>Здесь будут мои контакты</h1></div>

           <div className='aboutPages'><h1>Здесь будет информация обо мне</h1></div>

           <div className='skillsPages'><h1>Здесь будут мои навыки</h1></div>

           <div className='contactsPages'>
             <div className='contactGroupOne'>
               
              <a className='contactGitHub' href="https://github.com/dekiston" target="_blank">
                <div className='contactLogo'>
                <FaGithub className='logoIcon'></FaGithub>
                </div>
                <h1>Примеры моего кода</h1>
             </a> 

             <a className='contactSkype' href="https://github.com/dekiston" target="_blank">
               <div className='contactLogo'>
                <FaSkype className='logoIcon'></FaSkype>
               </div>
               <h1>Можем поболтать</h1>
             </a>

            <a className='contactHh' href="https://volgograd.hh.ru/resume/0454dd680008cfab0f0039ed1f666d57766c44?query=dekiston&hhtmFrom=resume_search_result" target="_blank">
                <div className='contactLogo'>
                <MdPersonSearch className='logoIcon'></MdPersonSearch>
                </div>
                <h1>Хочу с вами сотрудничать (HeadHunter)</h1>
            </a>
             </div>

             <div className='contactGroupTwo'>

             <a className='contactTg' href="https://t.me/dekiston" target="_blank">
               <div className='contactLogo'>
                <FaTelegram className='logoIcon'></FaTelegram>
               </div>
               <h1>Как со мной связаться</h1>
             </a>
             
             <a className='contactMail'href="mailto:dekiston@yandex.ru" target="_blank" >
               <div className='contactLogo'>               
                 <MdMail className='logoIcon'></MdMail>
               </div>
               <h1>Если предпочитаете почту</h1>
             </a>

  

             <a className='contactLinkedIn' href="https://github.com/dekiston" target="_blank">
                <div className='contactLogo'>
                <FaLinkedin className='logoIcon'></FaLinkedin>
                </div>
                 <h1>I still want to, but you are not from Russia</h1>
              </a>
             </div>
           </div>

           <div className='aboutPages'><h1>Здесь будет информация обо мне</h1></div>
         </Carusel>
        </div>
    </body>

    </div>
  );
}

export default App;


//FaLink - скопировать ссылку
//FaTelegram - лого телеграмма
//FaSkype - лого скайпа
//FaLinkedin - лого линкедИн
//MdMail - лого почты
//MdPersonSearch - лого Хх
//FaGithub - лого гитхаба