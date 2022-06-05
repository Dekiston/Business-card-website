
import {Carusel} from './Carousel.js';
import './App.scss';
import logo from './/components/logo.jpg';

import { BsFillBrightnessHighFill, BsFillBrightnessLowFill } from "react-icons/bs";
import { FaSkype, FaLinkedin, FaTelegram, FaGithub, FaLink, FaDev, FaWindows, FaNodeJs, FaApple, FaHtml5, FaSass, FaCss3, FaJsSquare, FaGitAlt, } from 'react-icons/fa';
import { MdPersonSearch, MdMail, MdHttp  } from "react-icons/md";
import { DiPostgresql } from "react-icons/di";


const TeleportAbout = () => {console.log ('Должно телепортировать на X = -100')}
const TeleportSkills = () => {console.log ('Должно телепортировать на X = -200')}
const TeleportContacts = () => {console.log ('Должно телепортировать на X = -300')}
function Contacts () {
  return (
    <div className='Flex'>
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
  );
}

function Skills () {
  return(
    <div className='Flex'>
      <div className='proffesionalSkills'>
        <div className='listPSkills'>
          <h1>Высокий уровень</h1>
          <div className='skillsField'>
            <FaCss3 className='skillIcon'></FaCss3>
            <FaGitAlt className='skillIcon'></FaGitAlt>
            <FaGithub className='skillIcon'></FaGithub>
            <FaHtml5 className='skillIcon'></FaHtml5>
            <FaJsSquare className='skillIcon'></FaJsSquare>
            <FaSass className='skillIcon'></FaSass>
            <FaNodeJs className='skillIcon'></FaNodeJs>
            <FaWindows className='skillIcon'></FaWindows>
            <FaApple className='skillIcon'></FaApple>
            <FaDev className='skillIcon'></FaDev>
            <MdHttp className='skillIcon'></MdHttp>
            <DiPostgresql className='skillIcon'></DiPostgresql>
          </div>
        </div>
      </div>
      <div className='moreSkills'>
      <div className='listMSkills'>
        <div></div>
        <div></div>
      </div>
      </div>
      
    </div>
  );
}

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
           
           <div className='aboutPages'><h1>Здесь будет информация обо мне</h1></div>

           <div className='skillsPages'>
             <Skills></Skills>
           </div>

           <div className='contactsPages'>
            <Contacts></Contacts>
           </div>

           <div className='aboutPages'><h1>Здесь будет информация обо мне</h1></div>

           <div className='skillsPages'>
           <Skills></Skills>
           </div>
         </Carusel>
        </div>
    </body>

    </div>
  );
}

export default App;


//FaLink - скопировать ссылку
//
//FaSass - css
//FaHtml5, FaSass, FaCss3, FaJsSquare, FaGitAlt, FaGithub  - html
//FaCss3 - csscs
//
//FaJsSquare - js
//FaGitAlt - git
//FaGithub

//DiHeroku
//MdHttp
//SiPostgresql
//
//