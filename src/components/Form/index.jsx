import { useState } from 'react';
import FileBase from 'react-file-base64';

import './form.styles.scss';

export const Form = () => {
	const initialFormState = {
		user: 'fer',
		title: '',
		description: '',
		image: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		sendFormData(formState);
	};

	const sendFormData = (userData) => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		};

		fetch('http://localhost:5000/posts', requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				return;
			})
			.catch((err) => console.error(err));
	};

	return (
		<form action='post' className='post_form' onSubmit={handleSubmit}>
			<h3 className='post_form__title'>Post something new</h3>
			<label htmlFor='post_title'>
				<input
					type='text'
					name='title'
					id='post_title'
					placeholder='Post title'
					value={formState.title}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor='post_description'>
				<textarea
					name='description'
					id='post_description'
					placeholder='Post Description'
					value={formState.description}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor='post_images'>
				<FileBase type='file' multiple={false} onDone={({ base64 }) => setFormState({ ...formState, image: base64 })} />
			</label>
			<button type='submit' className='post_submitButton'>
				Send it
			</button>
		</form>
	);
};
