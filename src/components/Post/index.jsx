import './post.styles.scss';

// Components
import { Tag } from 'components/Post/Tag';

export const Post = ({ title, date, img, likes, comments, favs, tags }) => {
	return (
		<article className='post'>
			<div className='post__container-top'>
				<h3 className='post__title'>{title}</h3>
				<span className='post__date'>{date}</span>
			</div>
			<img className='post__img' src={img} alt={title} />

			<div className='post__interaction-container'>
				<span className='post__likes'>{likes + ` likes`}</span>
				<span className='post__comments'>Comentarios</span>
				<span className='post__fav'>Agregar a fav</span>
			</div>
			<div className='post__tags-container'>
				<Tag tag='tag placeholder' />
				<Tag tag='tag2' />
				<Tag tag='tag3' />
			</div>
		</article>
	);
};
