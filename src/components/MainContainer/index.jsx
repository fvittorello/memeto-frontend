import './main-container.styles.scss';

// Components
import { Post } from 'components/Post';
import { Form } from 'components/Form';

export const MainContainer = () => {
	return (
		<div className='main-container'>
			<Post title='Titulo Post' date='hoy' img='https://via.placeholder.com/500' likes={1222134} />
			<Form />
		</div>
	);
};
