import styled from "styled-components";
import Feature from "../components/Feature";

function WhatGPT3() {
	return (
		<Gpt3WhatGpt3 className="section1__margin" id="wgpt3">
			<Gpt3WhatGpt3Feature>
				<Feature
					title="What is GPT3"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</Gpt3WhatGpt3Feature>
			<Gpt3WhatGpt3Heading>
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</Gpt3WhatGpt3Heading>
			<Gpt3WhatGpt3Container>
				<Feature
					title="Chatbots"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
				/>
				<Feature
					title="Knowledgebase"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
				<Feature
					title="Education"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
			</Gpt3WhatGpt3Container>
		</Gpt3WhatGpt3>
	);
}

export default WhatGPT3;

const Gpt3WhatGpt3 = styled.div`
	display: flex;
	flex-direction: column;

	padding: 2rem;
	background: var(--color-footer);

	/* ff 3.6+ */
	background: -moz-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* safari 5.1+,chrome 10+ */
	background: -webkit-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* opera 11.10+ */
	background: -o-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* ie 10+ */
	background: -ms-radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	/* global 92%+ browsers support */
	background: radial-gradient(
		circle at 30% -100%,
		#042c54 25%,
		rgba(4, 44, 84, 1) 85%,
		rgba(27, 120, 222, 1) 100%
	);

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Gpt3WhatGpt3Feature = styled.div`
	display: flex;

	& > .gpt3__features-container__feature {
		margin: 0;

		@media screen and (max-width: 650px) {
			flex-direction: column;
		}
	}

	& > .gpt3__features-container_feature-text {
		max-width: 700px;

		@media screen and (max-width: 650px) {
			margin-top: 0.5rem;
		}
	}
`;

const Gpt3WhatGpt3Heading = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4rem 0 2rem;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 34px;
		line-height: 45px;
		max-width: 510px;

		@media screen and (max-width: 650px) {
			font-size: 28px;
			line-height: 40px;
		}
	}

	& > p {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 16px;
		line-height: 30px;
		color: var(--color-subtext);
		cursor: pointer;
	}

	@media screen and (max-width: 850px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 0rem;

		& > p {
			margin-top: 1rem;
		}
	}
`;

const Gpt3WhatGpt3Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 2rem;

	& > .gpt3__features-container__feature {
		flex: 1;
		margin: 1rem;
		min-width: 210px;
		display: unset;
		flex-direction: column;

		@media screen and (max-width: 350px) {
			margin: 1rem 0;
			min-width: 100%;
		}
	}

	& > .gpt3__features-container_feature-text {
		margin-top: 0.5rem;
	}
`;
