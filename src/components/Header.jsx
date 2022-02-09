import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import kasaLogo from '../assets/img/logo.svg';

const Header = () => {
	const location = useLocation();

	return (
		<header className="header">
			<Link to="/">
				<img src={kasaLogo} alt="Kaza logo" className='header__logo' />
			</Link>
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li className={location.pathname === '/' ? 'active' : ''}>
						<Link to="/" className='header__nav-link'>Accueil</Link>
					</li>
					<li className={location.pathname === '/about' ? 'active' : ''}>
						<Link to="/about" className='header__nav-link'>A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;