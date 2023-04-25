import { Link } from 'react-router-dom';
import logo from '../../assets/logos/marte-logo.svg';

import "./SplashScreen.scss";

function SplashScreen() {
    return (
        <div className="splash-screen">
          <header className="header">
            <Link to={"https://linktr.ee/marte.zine"}><img src={logo} className="marte-logo" alt="logo" /></Link>
          </header>
        </div>
    )
}

export default SplashScreen;
