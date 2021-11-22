import React from 'react';

import { Grid, Container, Embed, Image, Divider } from 'semantic-ui-react';
import { Icon } from '@iconify/react';
import InstagramEmbed from 'react-instagram-embed';

import { ClientPhoto1, ClientPhoto2 } from '../../assets/';
import { ContactForm } from '../../components/';
import * as style from './landing.module.scss';

export default function LandingPage() {
	return (
		<>
			<LandingPage.HeaderVideo />
			<LandingPage.WelcomAndInfoSection />
			<LandingPage.ServiceTiles />
			<LandingPage.SocialFeed />
			<LandingPage.ContactSection />
		</>
	);
}

LandingPage.HeaderVideo = () => (
	<div className={style.HeaderVideoContainer} id={'section-1'}>
		{/* Overlay not only for style but to prevent hover styles on the youtube video and prevent the youtube brand popup as well as pause abilities. */}
		<div className={style.HeaderVideoOverlay} />
		<Embed
			autoplay={true}
			id='ofddQHqdLiA'
			active
			source='youtube'
			iframe={{
				allowFullScreen: true,
				src: 'https://www.youtube.com/embed/ofddQHqdLiA?autoplay=1&;mute=1&;playlist=ofddQHqdLiA&;loop=1&;controls=0&;rel=0',
				allow: 'autoplay',
			}}
		/>
	</div>
);

LandingPage.WelcomAndInfoSection = () => (
	<Container className={style.SectionContainer} id={'section-2'}>
		<Grid textAlign='center'>
			<Grid.Row textAlign='center' className={style.ContentRow}>
				<Grid.Column mobile={16} tablet={9} computer={9} className={style.ContentColumn}>
					<h3>HELLO AND THANK YOU FOR VISITING DALE THE HOST.COM</h3>
					<p>
						My name is Dale McLean and I’ve been in the entertainment industry since my early days attending
						the University of Miami. My reputation as an outstanding emcee / host is unparalleled and if
						anyone is counting that equals to over 15 years of experience in the industry
					</p>

					<p>
						Throughout the years working as an entertainer has groomed me into becoming one of the top host
						/ emcee’s in the industry. I have experience including but not limited to events such as Bar/Bat
						Mitzvah’s, corporate events and charity balls.
					</p>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={7} computer={7} className={style.ContentColumn}>
					<Image alt='dale the host' src={ClientPhoto1} />
				</Grid.Column>
			</Grid.Row>
			<Divider />
			<Grid.Row textAlign='center' className={style.ContentRow}>
				<Grid.Column mobile={16} tablet={7} computer={7} className={style.ContentColumn}>
					<Image alt='dale the host' src={ClientPhoto2} />
				</Grid.Column>
				<Grid.Column mobile={16} tablet={9} computer={9} className={style.ContentColumn}>
					<p>
						Additionally I was the in-arena host for the WNBA’s Miami Sol. I currently hold the same
						position for the NBA’s Miami HEAT, where my skills are called upon to entertain and motivate the
						Miami HEAT fans. I am often called upon to interview celebrities from all genre of
						entertainment.
					</p>

					<p>What I can bring to your event is professionalism, energy and creativity.</p>

					<p>So for your next event make it outstanding with DALE THE HOST!</p>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

LandingPage.ServiceTiles = () => (
	<Container fluid className={`${style.SkylineContainer} ${style.SectionContainer}`} id={'section-3'}>
		<div className={style.SkylineInnerContainer}>
			<h1>WHAT WE DO</h1>
			<div className={style.ServiceContainer}>
				<div className={style.ServiceBox}>
					<Icon icon='fluent:music-note-2-16-filled' />
					<h3>BAR | BAT MITZVAH</h3>
				</div>
				<div className={style.ServiceBox}>
					<Icon icon='clarity:heart-solid' />
					<h3>WEDDINGS</h3>
				</div>
				<div className={style.ServiceBox}>
					<Icon icon='bi:building' />
					<h3>CORPORATE EVENTS</h3>
				</div>
				<div className={style.ServiceBox}>
					<Icon icon='fa-solid:gift' />
					<h3>GALAS & CHARITY EVENTS</h3>
				</div>
			</div>
		</div>
	</Container>
);

LandingPage.SocialFeed = () => (
	<Container className={style.SectionContainer} id={'section-4'}>
		<SectionTitle title='DALE ON INSTA' />
		<Grid>
			<Grid.Row>
				<Grid.Column>
					<div>
						<InstagramEmbed
							url='https://www.instagram.com/p/mixstudiosonline'
							clientAccessToken='198083335828342|41ef72bb849aa49d6fafa04116eb6c34'
							maxWidth={320}
							hideCaption={false}
							containerTagName='div'
							protocol=''
							injectScript
							onLoading={() => {}}
							onSuccess={() => {}}
							onAfterRender={() => {}}
							onFailure={(err) => {
								console.log('it all failed :: ', err);
							}}
						/>
					</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

LandingPage.ContactSection = () => (
	<Container className={style.SectionContainer} id={'section-5'}>
		<Grid textAlign='center'>
			<Grid.Row textAlign='center'>
				<Grid.Column mobile={16} tablet={14} computer={12}>
					<SectionTitle title='CONTACT' />
					<p>
						For booking and more information, please fill out the contact form below and we will be sure to
						get in touch asap.
					</p>
					<ContactForm />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

const SectionTitle = ({ title }) => (
	<div className={style.SectionTitleContainer}>
		<h2 className={style.TitleText}>{title}</h2>
		<div className={style.TitleUnderline} />
	</div>
);
