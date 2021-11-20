import React from 'react';
import { Container } from 'semantic-ui-react';
import * as style from './footer.module.scss';

export default function Footer() {
	return (
		<Container fluid className={style.Container}>
			<Container className={style.ContainerInner}>
				<a href='/'>Developed By THE MEDIA STANDARD</a>
			</Container>
		</Container>
	);
}
