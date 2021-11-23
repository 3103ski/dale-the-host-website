import React from 'react';
import { Container } from 'semantic-ui-react';
import * as style from './footer.module.scss';

export default function Footer() {
	return (
		<Container fluid className={style.Container}>
			<Container className={style.ContainerInner}>
				<a style={{ margin: '0 10px' }} href='/'>
					Developed By THE MEDIA STANDARD
				</a>
				<a
					style={{ margin: '0 10px' }}
					href='https://www.termsfeed.com/live/bf970352-4b48-449f-9325-276f010a6337'>
					Privacy Policy
				</a>
			</Container>
		</Container>
	);
}
