import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <img className="header_logo" src={`/icons/logo.svg}`} alt="MultiKassa" />
      <nav>
        <ul>
          <li>Калькулятор</li>
          <li>Что входит во франшизу</li>
          <li>Доступные города</li>
          <li>F.A.Q</li>
        </ul>
      </nav>
      <div className="header_social">
        <div>
          <img src={`/icons/tg.svg}`} alt="tg" />
        </div>
        <div>
          <img src={`/icons/wt.svg}`} alt="tg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
