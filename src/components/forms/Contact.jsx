import React from 'react';

import { Form } from 'semantic-ui-react';

export default function ContactForm() {
	return (
		<Form>
			<Form.Input placeholder='Name' />
			<Form.Input placeholder='Email' />
			<Form.TextArea placeholder='Message' />
			<Form.Button>Send</Form.Button>
		</Form>
	);
}
