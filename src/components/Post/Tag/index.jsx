import './tag.styles.scss';

export const Tag = ({ tag }) => {
	return (
		<button className='tag'>
			<a className='tag__text' href='/'>
				{tag}
			</a>
		</button>
	);
};
