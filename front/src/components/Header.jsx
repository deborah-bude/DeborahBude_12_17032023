import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    return <header>
        <Link to="/"><img src={logo} alt="Logo SportSee"/></Link>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/">Profil</NavLink>
            <NavLink to="/">Réglages</NavLink>
            <NavLink to="/">Communauté</NavLink>
        </nav>
    </header>
}