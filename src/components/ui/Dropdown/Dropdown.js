import './DropDown.css';
import { useState } from 'react';
import arrowUp from '../../assets/img/arrow_up.svg';

const DropDown = ({ title, content, type = 'large' }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article
			className={'dropdown ' + (type === 'large' ? 'large' : 'small') + (isOpen ? '' : ' drop_closed')}
			onClick={() => {
				setIsOpen(!isOpen);
			}}>
			<div className="dropdown__title">
				<h3>{title}</h3>
				<img src={arrowUp} alt="Open/Close dropdown" className={isOpen ? 'arr_down' : ''} />
			</div>
			<p className="dropdown__content">{content}</p>
		</article>
	);
};

export default DropDown;