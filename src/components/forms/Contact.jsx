import React from 'react';

import useForm from './useForm.js';
import { Form } from 'semantic-ui-react';

export default function ContactForm() {
	const { values, onChange } = useForm(handleOnSubmit, {
		name: '',
		email: '',
		message: '',
	});

	function handleOnSubmit() {
		alert("Message Sent! I'll get back to you as soon as I can.");
	}
	return (
		<form className='ui form' method='post' data-netlify='true' netlify name='contact' action='/form-success'>
			<input type='hidden' name='form-name' value='contact' />
			<Form.Input onChange={onChange} value={values.name} name='name' placeholder='Name' />
			<Form.Input onChange={onChange} value={values.email} name='email' placeholder='Email' />
			<Form.TextArea onChange={onChange} value={values.message} name='message' placeholder='Message' />
			<Form.Button type='submit'>Send</Form.Button>
		</form>
	);
}
