import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<main className="corps-page error">
			<h1 className="title--error">404</h1>
			<p>Oups! L'utilisateur que vous demandez n'existe pas.</p>
			<Link className="link" to="/12">
				Retourner sur la page d’accueil
			</Link>
		</main>
	);
}
