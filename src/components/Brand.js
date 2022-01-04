import styled from "styled-components";
import google from "../assets/google.webp";
import slack from "../assets/slack.webp";
import atlassian from "../assets/atlassian.webp";
import dropbox from "../assets/dropbox.webp";
import shopify from "../assets/shopify.webp";

function Brand() {
	return (
		<Gpt3Brand className="section1__padding">
			<Gpt3BrandContainer>
				<img src={google} alt="google" />
			</Gpt3BrandContainer>
			<Gpt3BrandContainer>
				<img src={slack} alt="slack" />
			</Gpt3BrandContainer>
			<Gpt3BrandContainer>
				<img src={atlassian} alt="atlassian" />
			</Gpt3BrandContainer>
			<Gpt3BrandContainer>
				<img src={dropbox} alt="dropbox" />
			</Gpt3BrandContainer>
			<Gpt3BrandContainer>
				<img src={shopify} alt="shopify" />
			</Gpt3BrandContainer>
		</Gpt3Brand>
	);
}

export default Brand;

const Gpt3Brand = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Gpt3BrandContainer = styled.div`
	flex: 1;
	max-width: 150px;
	min-width: 120px;
	margin: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
