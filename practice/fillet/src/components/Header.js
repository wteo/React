import './Header.css';
import Image from './images/logo.jpg';

function Header () {
    return (
    <div id="topHeader">
      <img  src={Image} alt="Good Food logo" className="logo"/>
      <div>
        <p>Australia's</p>
        <br/>
        <br/>
        <p>Home of the Hats</p>
      </div>
    </div>
    );
}

export default Header;