import React from 'react';
import swanCrossLogo from '../images/SClogo_wStarburst.gif';
import swanCrossLogoName from '../images/S-Cname.png';
import "./Header.css";

function Header ()  {
  return (
    <div class='background container'>
      <img src={swanCrossLogo} alt='SwanCrossLogo'></img>
      <img src={swanCrossLogoName} alt='SwanCrossLogo'></img>
    </div>
  );
}

export default Header;