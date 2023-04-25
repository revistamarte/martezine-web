import logo from '../../assets/logos/marte-logo.svg';
import HeaderLinks from './headerLinks/HeaderLinks';
import AuthButtons from './authButtons/AuthButtons';

import "./MarteHeader.scss";

function MarteHeader() {
    return (
        <div className='marte-header'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='links'>
                <HeaderLinks />
            </div>
            <div className='auth'>
                <AuthButtons />
            </div>
        </div>
    );
}

export default MarteHeader;
