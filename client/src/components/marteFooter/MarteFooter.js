import MarteMLogo from '../marteMLogo/MarteMLogo';
import { Link } from 'react-router-dom';
import pinterest from "../../assets/icons/pinterest-icon.png";
import instagram from "../../assets/icons/instagram-icon.png";
import mail from "../../assets/icons/mail-icon.png";


import "./MarteFooter.scss"




function MarteFooter() {


    return(
        <div className="marte-footer">
            
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
                    <span className='user-terms'>
                    termos de uso
                    </span>
                    <span>
                    política de privacidade
                    </span>
                </div>
                <div className='social-logos'>
                    <img src={pinterest}/>
                    <img src={instagram}/>
                    <img src={mail}/>
                </div>
            </div>
        </div>
    )
}


export default MarteFooter;