import styled from "styled-components";

import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import Brand from "./components/Brand";
import WhatGPT3 from "./containers/WhatGPT3";
import Features from "./containers/Features";
import Possibility from "./containers/Possibility";
import CTA from "./components/CTA";
import Blog from "./containers/Blog";
import Footer from "./containers/Footer";

function App() {
	return (
		<Container>
			<GradientBg>
				<Navbar />
				<Header />
			</GradientBg>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</Container>
	);
}

export default App;

const Container = styled.div``;

const GradientBg = styled.div`
	/* ff 3.6+ */
	background: -moz-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);

	/* safari 5.1+,chrome 10+ */
	background: -webkit-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);

	/* opera 11.10+ */
	background: -o-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);

	/* ie 10+ */
	background: -ms-radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);

	/* global 92%+ browsers support */
	background: radial-gradient(
		circle at 3% 25%,
		rgba(0, 40, 83, 1) 0%,
		rgba(4, 12, 24, 1) 100%
	);
`;
