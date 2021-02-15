// Styles
import './header.styles.scss';

export const Header = () => {
	return (
		<header className='header'>
			<h1 className='logo'>Logo</h1>
			<ul className='nav'>
				<li className='nav__link'>Link 1</li>
				<li className='nav__link'>Link 2</li>
				<li className='nav__link'>Link 3</li>
				<li className='nav__link'>Link 4</li>
			</ul>
		</header>
	);
};
