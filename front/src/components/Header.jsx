import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="entete-page">
			<div>
				<Link className="entete-page__logo" to="/">
					<img src={logo} alt="Logo SportSee" />
				</Link>
				<nav className="entete-page__nav">
					<NavLink className="entete-page__nav-item" to="/">
						Accueil
					</NavLink>
					<NavLink className="entete-page__nav-item" to="/">
						Profil
					</NavLink>
					<NavLink className="entete-page__nav-item" to="/">
						Réglages
					</NavLink>
					<NavLink className="entete-page__nav-item" to="/">
						Communauté
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
