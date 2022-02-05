// Header = Logo + link (Home+About) 
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import kasaLogo from '../../../assets/img/logo.svg';

const Header = () => {
	// const [activeItem, setActiveItem] = useState("Home");
	const location = useLocation();

	return (
		<header className="header">
			<Link to="/">
				<img src={kasaLogo} alt="Kaza logo" />
			</Link>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className={location.pathname === '/' ? 'active' : ''}>
						<Link to="/">Accueil</Link>
					</li>
					<li className={location.pathname === '/about' ? 'active' : ''}>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;