import { Link } from "react-router-dom";

function HeaderLinks() {
    return (
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/edicoes"}>edições</Link></li>
            <li><Link to={"/assinar"}>eu quero!</Link></li>
            <li><Link to={"/sobre"}>sobre</Link></li>
        </ul>
    )
}

export default HeaderLinks;
