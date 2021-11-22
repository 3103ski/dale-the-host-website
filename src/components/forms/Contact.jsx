import React from 'react';

import useForm from './useForm.js';
import { Form } from 'semantic-ui-react';

export default function ContactForm() {
	const { onSubmit, values, onChange, resetFormValues } = useForm(handleOnSubmit, {
		name: '',
		email: '',
		message: '',
	});

	function handleOnSubmit() {
		alert("Message Sent! I'll get back to you as soon as I can.");
	}
	return (
		<form className='ui form' method='post' data-netlify='true' name='contact' action='/form-success'>
			<input type='hidden' name='form-name' value='contact' />
			<Form.Input placeholder='Name' />
			<Form.Input placeholder='Email' />
			<Form.TextArea placeholder='Message' />
			<Form.Button type='submit'>Send</Form.Button>
		</form>
	);
}
