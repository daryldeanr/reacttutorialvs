import TrebleClef from '../images/TrebleClef01.png';
import WhatsNew from '../components/WhatsNew';
import "./MainContent.css";

function MainContent() {
  return (
    <div class='containerMain'>
        <div class='flexBoxVCenter'>
          <img class="imgResize" src={TrebleClef} alt='TrebleClef' />
          <span class='titleText'>Music with a difference . . . </span>
        </div>
        <WhatsNew />
        </div>
  );
}

export default MainContent;