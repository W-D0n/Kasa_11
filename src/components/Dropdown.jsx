import { useState } from 'react';
import '../styles/Dropdown.css';
import arrowUp from '../assets/img/arrow_up.svg';

const Dropdown = ({ title, content, type = 'large' }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article
			className={'dropdown ' + (type === 'large' ? 'large' : 'small') + (isOpen ? '' : ' closed')}
			onClick={() => {
				setIsOpen(!isOpen)
			}}>
			<div className='dropdown__heading'>
				<h3 className='dropdown__title'>{title}</h3>
				<img
					className={isOpen ? 'arrow_down' : ''}
					src={arrowUp}
					alt='chevron to close or open dropdown'></img>
			</div>
			<div className='dropdown__content'>{content}</div>
		</article>
	);
};

export default Dropdown;