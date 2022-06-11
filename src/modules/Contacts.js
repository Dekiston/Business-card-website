import { FaSkype, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import { MdPersonSearch, MdMail } from "react-icons/md";
import "../App.scss";

export const Contacts = () => {
  return (
    <div className="Flex">
      <div className="contactGroupOne">
        <a
          className="contactGitHub"
          href="https://github.com/dekiston"
          target="_blank"
        >
          <div className="contactLogo">
            <FaGithub className="logoIcon"></FaGithub>
          </div>
          <h1>Примеры моего кода</h1>
        </a>

        <a
          className="contactSkype"
          href="https://github.com/dekiston"
          target="_blank"
        >
          <div className="contactLogo">
            <FaSkype className="logoIcon"></FaSkype>
          </div>
          <h1>Можем поболтать</h1>
        </a>

        <a
          className="contactHh"
          href="https://volgograd.hh.ru/resume/0454dd680008cfab0f0039ed1f666d57766c44?query=dekiston&hhtmFrom=resume_search_result"
          target="_blank"
        >
          <div className="contactLogo">
            <MdPersonSearch className="logoIcon"></MdPersonSearch>
          </div>
          <h1>Хочу с вами сотрудничать (HeadHunter)</h1>
        </a>
      </div>

      <div className="contactGroupTwo">
        <a className="contactTg" href="https://t.me/dekiston" target="_blank">
          <div className="contactLogo">
            <FaTelegram className="logoIcon"></FaTelegram>
          </div>
          <h1>Как со мной связаться</h1>
        </a>

        <a
          className="contactMail"
          href="mailto:dekiston@yandex.ru"
          target="_blank"
        >
          <div className="contactLogo">
            <MdMail className="logoIcon"></MdMail>
          </div>
          <h1>Если предпочитаете почту</h1>
        </a>

        <a
          className="contactLinkedIn"
          href="https://github.com/dekiston"
          target="_blank"
        >
          <div className="contactLogo">
            <FaLinkedin className="logoIcon"></FaLinkedin>
          </div>
          <h1>I still want to, but you are not from Russia</h1>
        </a>
      </div>
    </div>
  );
};
