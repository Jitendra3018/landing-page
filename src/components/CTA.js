import styled from "styled-components";

function CTA() {
	return (
		<Gpt3CTA>
			<Gpt3CTAContent>
				<p>Request Early Access to Get Started</p>
				<h3>
					Register today & start exploring the endless possibilities.
				</h3>
			</Gpt3CTAContent>
			<Gpt3CTAButton>
				<button type="button">Get Started</button>
			</Gpt3CTAButton>
		</Gpt3CTA>
	);
}

export default CTA;

const Gpt3CTA = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	margin: 4rem;
	border-radius: 1rem;
	background: var(--gradient-bar);

	@media screen and (max-width: 650px) {
		flex-direction: column;
	}

	@media screen and (max-width: 550px) {
		margin: 4rem 2rem;
	}
`;

const Gpt3CTAContent = styled.div`
	& > p {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 30px;
		color: #0e0e0e;
	}

	& > h3 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 24px;
		line-height: 45px;
		color: #000000;

		@media screen and (max-width: 550px) {
			font-size: 18px;
			line-height: 32px;
		}
	}
`;

const Gpt3CTAButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2rem;

	& > button {
		background: #000000;
		border-radius: 40px;
		font-family: var(--font-family);
		font-size: 18px;
		font-weight: bold;
		line-height: 30px;
		color: #ffffff;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		min-width: 150px;

		@media screen and (max-width: 550px) {
			font-size: 14px;
			line-height: 28px;
		}
	}

	@media screen and (max-width: 650px) {
		margin: 2rem 0 0;
	}
`;
