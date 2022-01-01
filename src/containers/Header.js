import styled from "styled-components";
import people from "../assets/people.png";
import ai from "../assets/ai.png";

function Header() {
	return (
		<Gpt3Header className="section__padding" id="home">
			<Gpt3HeaderContent>
				<h1 className="gradient__text">
					Let's Build Something Amazing with GPT-3 Open AI
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing.
					Not thoughts all exercise blessing. Indulgence way
					everything joy alteration boisterous the attachment. Party
					we years to order allow asked of.
				</p>
				<Gpt3HeaderContentInput>
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Started</button>
				</Gpt3HeaderContentInput>
				<Gpt3HeaderContentPeople>
					<img src={people} alt="People" />
					<p>
						1,600 people requested access a visit in last 24 hours
					</p>
				</Gpt3HeaderContentPeople>
			</Gpt3HeaderContent>
			<Gpt3HeaderImage>
				<img src={ai} alt="ai" />
			</Gpt3HeaderImage>
		</Gpt3Header>
	);
}

export default Header;

const Gpt3Header = styled.div`
	display: flex;

	@media screen and (max-width: 1050px) {
		flex-direction: column;
	}
`;

const Gpt3HeaderContent = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	margin-right: 5rem;
	margin-left: 5rem;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 62px;
		line-height: 75px;
		letter-spacing: -0.04rem;
	}

	& > p {
		font-family: var(--font-family);
		font-weight: normal;
		font-style: normal;
		font-size: 20px;
		line-height: 27px;
		color: var(--color-text);
		margin-top: 1.5rem;
	}

	@media screen and (max-width: 1050px) {
		margin: 0 2.5rem;
	}

	@media screen and (max-width: 650px) {
		margin: 0 2rem;

		& > h1 {
			font-size: 48px;
			line-height: 60px;
		}

		& > p {
			font-size: 16px;
			line-height: 24px;
		}
	}

	@media screen and (max-width: 490px) {
		& > h1 {
			font-size: 36px;
			line-height: 48px;
		}

		& > p {
			font-size: 14px;
			line-height: 20px;
		}
	}
`;

const Gpt3HeaderContentInput = styled.div`
	width: 100%;
	margin: 2rem 0 1rem;
	display: flex;

	& > input {
		flex: 2;
		width: 100%;
		min-height: 50px;
		background: var(--color-footer);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		font-family: var(--font-family);
		font-size: 20px;
		line-height: 27px;
		color: #fff;
		border: 2px solid var(--color-footer);
		padding: 0 1rem;
		outline: none;
	}

	& > button {
		background: #ff4820;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		font-family: var(--font-family);
		font-weight: bold;
		line-height: 27px;
		color: #fff;
		flex: 0.6;
		width: 100%;
		min-height: 50px;
		font-size: 20px;
		cursor: pointer;
		outline: none;
		padding: 0 1rem;
		border: none;
	}

	@media screen and (max-width: 650px) {
		& > input,
		& > button {
			font-size: 16px;
			line-height: 24px;
		}
	}

	@media screen and (max-width: 490px) {
		& > input,
		& > button {
			font-size: 12px;
			line-height: 16px;
		}
	}
`;

const Gpt3HeaderContentPeople = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 2rem;

	& > img {
		width: 181.79px;
		height: 38px;
	}

	& > p {
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 12px;
		line-height: 38px;
		color: #fff;
		margin-left: 1rem;
		text-align: center;
	}

	@media screen and (max-width: 650px) {
		flex-direction: column;

		& > p {
			margin: 0;
		}
	}
`;

const Gpt3HeaderImage = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 100%;
		height: 100%;
	}
`;
