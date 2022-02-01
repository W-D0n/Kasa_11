// Header = Logo + link (Home+About) 
import './Header.css';
import { Link } from 'react-router-dom';
import kasaLogo from '../../../assets/img/logo.svg';

const Header = ({ activeItem }) => {
	// const [activeItem, setActiveItem] = useState("Home");

	return (
		<header className="header">
			<img src={kasaLogo} alt="Kaza logo" />
			<nav className="header_nav">
				<ul className="header_nav-list">
					<li className={activeItem === 'Home' ? 'active' : ''}>
						<Link to="/">Home</Link>
					</li>
					<li className={activeItem === 'About' ? 'active' : ''}>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;