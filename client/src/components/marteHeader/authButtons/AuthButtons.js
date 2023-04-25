import { Link } from "react-router-dom";

function AuthButtons() {
    return (
        <ul>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/registrar"}>Registrar</Link></li>
        </ul>
    )
}

export default AuthButtons;
