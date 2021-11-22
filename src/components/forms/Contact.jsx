import React from 'react';

// import useForm from './useForm.js';
// import { Form } from 'semantic-ui-react';

export default function ContactForm() {
	// const { values, onChange } = useForm(handleOnSubmit, {
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });

	// function handleOnSubmit() {
	// 	alert("Message Sent! I'll get back to you as soon as I can.");
	// }
	return (
		<form className='ui form' method='POST' data-netlify='true' name='contactDale'>
			<input type='hidden' name='form-name' value='contactDale' />
			<input type='text' name='name' placeholder='Name' />
			<input type='text' name='email' placeholder='Email' />
			<input type='text' name='message' placeholder='Message' />
			<button type='submit'>Send</button>
			{/* <Form.Input type='text' name='name' placeholder='Name' />
			<Form.Input type='text' name='email' placeholder='Email' />
			<Form.TextArea type='text' name='message' placeholder='Message' />
			<Form.Button type='submit'>Send</Form.Button> */}
		</form>
	);
}
