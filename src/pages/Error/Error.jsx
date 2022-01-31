import './Error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className="error">
			<span className="error__bigNum">404</span>
			<p className="error__text">Oups! Cette page n&apos;existe pas.</p>
			<Link to="/" className="error__link">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
};