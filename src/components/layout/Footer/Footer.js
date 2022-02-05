import './Footer.css'
import kasaLogo from '../../../assets/img/kasa_frame_logo.svg';

const Footer = () => {
  return (
		<div className="footer">
			<img src={kasaLogo} alt="Kasa Logo" className="footer_logo" />
			<span>© 2020 Kasa. All rights reserved</span>
		</div>
	);
};

export default Footer