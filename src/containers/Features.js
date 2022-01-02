import styled from "styled-components";
import Feature from "../components/Feature";

const featuresData = [
	{
		title: "Improving end distrusts instantly",
		text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
	},
	{
		title: "Become the tended active",
		text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
	},
	{
		title: "Message or am nothing",
		text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
	},
	{
		title: "Really boy law county",
		text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
	},
];

function Features() {
	return (
		<Gpt3Features className="section1__padding" id="features">
			<GptFeaturesHeading>
				<h1 className="gradient__text">
					The Future is Now and You Just Need To Realize It. Step into
					Future Today & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</GptFeaturesHeading>
			<GptFeaturesContainer>
				{featuresData.map((item, index) => (
					<Feature
						title={item.title}
						text={item.text}
						key={item.title + index}
					/>
				))}
			</GptFeaturesContainer>
		</Gpt3Features>
	);
}

export default Features;

const Gpt3Features = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 990px) {
		flex-direction: column;
	}
`;

const GptFeaturesHeading = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	margin-right: 5rem;
	text-align: left;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 34px;
		line-height: 45px;

		@media screen and (max-width: 550px) {
			font-size: 28px;
			line-height: 38px;
		}
	}

	& > p {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 30px;
		color: var(--color-subtext);
		margin-top: 2rem;
	}

	@media screen and (max-width: 990px) {
		margin: 0 0 2rem 0;
	}
`;

const GptFeaturesContainer = styled.div`
	flex: 1.5;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;
