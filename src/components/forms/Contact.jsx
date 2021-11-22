import React from 'react';

// import useForm from './useForm.js';
import { Form } from 'semantic-ui-react';

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
		<form className='ui form' method='post' data-netlify='true' name='contact'>
			<input type='hidden' name='form-name' value='contact' />
			<Form.Input type='text' name='name' placeholder='Name' />
			<Form.Input type='text' name='email' placeholder='Email' />
			<Form.TextArea type='text' name='message' placeholder='Message' />
			<Form.Button type='submit'>Send</Form.Button>
		</form>
	);
}
