import * as style from './App.scss';
import { LandingPage } from './pages/';
import { Footer, Navbar } from './components/';

export default function App() {
	return (
		<div className={style.App}>
			<Navbar />
			<LandingPage />
			<Footer />
		</div>
	);
}
