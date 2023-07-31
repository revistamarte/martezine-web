import MarteMLogo from '../marteMLogo/MarteMLogo';
import InstagramIcon from '../socialIcons/instagramIcon/InstagramIcon';
import MailIcon from '../socialIcons/mailIcon/MailIcon';
import PinterestIcon from '../socialIcons/pinterestIcon/PinterestIcon';
import { Link } from 'react-router-dom';
/*import pinterest from "../../assets/icons/pinterest-icon.png";
import instagram from "../../assets/icons/instagram-icon.png";
import mail from "../../assets/icons/mail-icon.png";*/
import { useContext } from 'react';
import AppContext from '../../contexts/App.context';


import "./MarteFooter.scss"




function MarteFooter() {
    const {theme} = useContext(AppContext);

    return(
        <div className={`marte-footer ${theme}`}>
            
            <div className='logo-and-text'>
                <Link to="/" className='logoM'>
                    <MarteMLogo/>
                </Link>
                    
                
                <div className='footer-text'>
                    <span>
                    uma zine que é revista
                    <br/>
                    ou uma revista que é zine
                    </span>
                </div>
            </div>
            <div className='social-and-contracts'>
                <div className='clicable-contract-links'>
                    <span className={`user-terms ${theme}`}>
                    termos de uso
                    </span>
                    <span className={`user-terms ${theme}`}>
                    política de privacidade
                    </span>
                </div>
                <div className='social-logos'>
                    <a href='https://br.pinterest.com/revistamarte/' target="_blank">
                        <button><PinterestIcon/></button>
                    </a>
                    <a href='https://www.instagram.com/marte.zine/' target="_blank">
                        <button><InstagramIcon/></button>
                    </a>
                    <a href='https://www.youtube.com/watch?v=z7rxl5KsPjs' target="_blank">
                        <button><MailIcon/></button>
                    </a>
                    
                    
                </div>
            </div>
        </div>
    )
}


export default MarteFooter;