import React, { useState, useEffect, useCallback } from 'react';

import { Menu, Dropdown } from 'semantic-ui-react';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

import { Logo } from '../../assets/';

import * as style from './navbar.module.scss';
import './navbar.module.scss';

export default function Navbar() {
	const [state, setState] = useState('home');
	const [scrollState, setScrollState] = useState('top');
	const handleOnCLick = (e, { name }) => setState(name);

	const listener = useCallback(
		(e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				if (scrollState !== 'scrolled') {
					setScrollState('scrolled');
				}
			} else {
				if (scrollState !== 'top') {
					setScrollState('top');
				}
			}
		},
		[scrollState]
	);

	const Links = () => (
		<>
			<Menu.Item
				activeClass={style.Active}
				as={Link}
				smooth={true}
				spy={true}
				offset={-90}
				duration={500}
				to='section-3'
				className={style.NavLink}
				name='services'
				active={state === 'services'}
				onClick={handleOnCLick}
			/>
			<Menu.Item
				activeClass={style.Active}
				as={Link}
				smooth={true}
				spy={true}
				offset={-90}
				duration={500}
				to='section-2'
				className={style.NavLink}
				name='about'
				active={state === 'about'}
				onClick={handleOnCLick}
			/>
			<Menu.Item
				activeClass={style.Active}
				as={Link}
				smooth={true}
				spy={true}
				offset={-90}
				duration={500}
				to='section-4'
				className={style.NavLink}
				name='instagram'
				active={state === 'instagram'}
				onClick={handleOnCLick}
			/>
			<Menu.Item
				activeClass={style.Active}
				as={Link}
				smooth={true}
				spy={true}
				offset={-90}
				duration={500}
				to='section-5'
				className={style.NavLink}
				name='contact'
				active={state === 'contact'}
				onClick={handleOnCLick}
			/>
		</>
	);

	useEffect(() => {
		document.addEventListener('scroll', listener);
		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, [listener]);

	return (
		<Menu
			pointing
			secondary
			fixed='top'
			className={`${style.NavContainer}`}
			data-scroll-state={scrollState === 'top' ? 1 : 0}>
			<Menu.Item
				as={Link}
				smooth={true}
				spy={true}
				offset={-90}
				duration={500}
				to='section-1'
				className={style.NavLink}
				name='home'
				active={state === 'home'}
				onClick={handleOnCLick}>
				<img
					className={style.MenuLogo}
					data-logo-at-top={scrollState === 'top' ? 1 : 0}
					src={Logo}
					alt='Dave The Host Logo'
				/>
			</Menu.Item>

			<Menu.Menu position='right' className={style.RightMenu}>
				<Links />
			</Menu.Menu>

			<Menu.Menu position='right' className={style.MobileNav}>
				<Dropdown icon='' trigger={<Icon icon='feather:menu' />} className={style.MobilIconContainer}>
					<Dropdown.Menu>
						<Links />
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Menu>
		</Menu>
	);
}
