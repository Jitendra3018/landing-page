import styled from "styled-components";
import possibilityImage from "../assets/possibility.png";

function Possibility() {
	return (
		<Gpt3Possibility className="section1__padding" id="possibility">
			<Gpt3PossibilityImage>
				<img src={possibilityImage} alt="Possibility" />
			</Gpt3PossibilityImage>
			<Gpt3PossibilityContent>
				<h4>Request Early Access to Get Started</h4>
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing.
					Not thoughts all exercise blessing. Indulgence way
					everything joy alteration boisterous the attachment. Party
					we years to order allow asked of.
				</p>
				<h4>Request Early Access to Get Started</h4>
			</Gpt3PossibilityContent>
		</Gpt3Possibility>
	);
}

export default Possibility;

const Gpt3Possibility = styled.div`
	display: flex;

	@media screen and (max-width: 950px) {
		flex-direction: column;
	}
`;

const Gpt3PossibilityImage = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 2rem;

	& > img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 950px) {
		margin: 1rem 0;
	}
`;

const Gpt3PossibilityContent = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-direction: column;

	& > h4 {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 30px;
		color: #71e5ff;
	}

	& > h4:last-child {
		color: var(--color-subtext);
	}

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 34px;
		line-height: 45px;
		margin: 1rem 0;
	}

	& > p {
		font-family: var(--font-family);
		font-size: 18px;
		line-height: 30px;
		color: var(--color-text);
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 950px) {
		margin-top: 2rem;
	}
`;
