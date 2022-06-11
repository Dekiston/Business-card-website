
import { FaGithub, FaDev, FaWindows, FaNodeJs, FaApple, FaHtml5, FaSass, FaCss3, FaJsSquare, FaGitAlt, } from 'react-icons/fa';
import { MdHttp  } from "react-icons/md";
import { DiPostgresql } from "react-icons/di";
import '../App.scss';

export const Skills = () => {
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
          <div className='oneColumn'>
            <h1>Высокий уровень</h1>
            <div className='skillsField'></div>
          </div>
          <div className='twoColumn'>
            <h1>Высокий уровень</h1>
            <div className='skillsField'></div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }