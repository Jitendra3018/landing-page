import styled from "styled-components";

function Feature({ title, text }) {
	return (
		<Gpt3FeaturesContainerFeature className="gpt3__features-container__feature">
			<Gpt3FeaturesContainerFeatureTitle className="gpt3__features-container__feature-title">
				<div />
				<h1>{title}</h1>
			</Gpt3FeaturesContainerFeatureTitle>
			<Gpt3FeaturesContainerFeatureText className="gpt3__features-container_feature-text">
				{text}
			</Gpt3FeaturesContainerFeatureText>
		</Gpt3FeaturesContainerFeature>
	);
}

export default Feature;

const Gpt3FeaturesContainerFeature = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;

	@media screen and (max-width: 550px) {
		margin: 1rem 0;
	}
`;

const Gpt3FeaturesContainerFeatureTitle = styled.div`
	flex: 1;
	max-width: 180px;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 18px;
		line-height: 40px;
		letter-spacing: 0.1rem;
		color: #fff;

		@media screen and (max-width: 550px) {
			font-size: 18px;
			line-height: 40px;
		}
	}

	& > div {
		width: 38px;
		height: 5px;
		background: var(--gradient-bar);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		margin-bottom: 0.25rem;
	}
`;

const Gpt3FeaturesContainerFeatureText = styled.div`
	flex: 2;
	max-width: 490px;
	display: flex;
	font-family: var(--font-family);
	font-weight: 500;
	font-size: 14px;
	line-height: 30px;
	color: var(--color-text);

	@media screen and (max-width: 550px) {
		font-size: 15px;
		line-height: 25px;
	}
`;
