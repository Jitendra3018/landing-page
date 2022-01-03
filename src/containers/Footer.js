import styled from "styled-components";
import gpt3Logo from "../assets/logo.svg";

function Footer() {
	return (
		<Gpt3Footer className="section1__padding">
			<Gp3FooterHeading>
				<h1 className="gradient__text">
					Do you want to step in to the future before others
				</h1>
			</Gp3FooterHeading>
			<Gpt3FooterBtn>
				<p>Request Early Access</p>
			</Gpt3FooterBtn>
			<Gpt3FooterLinks>
				<Gpt3FooterLinksLogo>
					<img src={gpt3Logo} alt="Gpt3 Logo" />
					<p>
						Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
					</p>
				</Gpt3FooterLinksLogo>
				<Gpt3FooterLinksDiv>
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</Gpt3FooterLinksDiv>
				<Gpt3FooterLinksDiv>
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</Gpt3FooterLinksDiv>
				<Gpt3FooterLinksDiv>
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</Gpt3FooterLinksDiv>
			</Gpt3FooterLinks>
			<Gpt3FooterCopyright>
				<p>© 2021 GPT-3. All rights reserved.</p>
			</Gpt3FooterCopyright>
		</Gpt3Footer>
	);
}

export default Footer;

const Gpt3Footer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--color-footer);
	color: white;
`;

const Gp3FooterHeading = styled.div`
	width: 100%;
	text-align: center;
	margin-bottom: 3rem;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 62px;
		line-height: 75px;
		text-align: center;

		@media screen and (max-width: 850px) {
			font-size: 44px;
			line-height: 50px;
		}

		@media screen and (max-width: 550px) {
			font-size: 34px;
			line-height: 42px;
		}

		@media screen and (max-width: 400px) {
			font-size: 27px;
			line-height: 38px;
		}
	}
`;

const Gpt3FooterBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border: 1px solid #fff;
	text-align: center;
	width: 250px;
	margin-bottom: 10rem;
	cursor: pointer;

	& > p {
		box-sizing: border-box;
		font-family: var(--font-family);
		font-size: 18px;
		line-height: 21px;
		word-spacing: 2px;

		@media screen and (max-width: 550px) {
			font-size: 14px;
			line-height: 20px;
		}
	}
`;

const Gpt3FooterLinks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 100%;
	text-align: left;
`;

const Gpt3FooterLinksLogo = styled.div`
	display: flex;
	flex-direction: column;

	& > img {
		width: 118px;
		height: 30px;
		margin-bottom: 1rem;
	}

	& > p {
		font-family: var(--font-family);
		font-size: 12px;
		line-height: 15px;
	}
`;

const Gpt3FooterLinksDiv = styled.div`
	margin: 1rem;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	& > h4 {
		font-family: var(--font-family);
		font-size: 14px;
		line-height: 17px;
		margin-bottom: 1rem;
	}

	& > p {
		font-family: var(--font-family);
		font-size: 12px;
		line-height: 15px;
		margin: 0.5rem 0;
		cursor: pointer;
	}
`;

const Gpt3FooterCopyright = styled.div`
	margin-top: 2rem;
	text-align: center;
	width: 100%;

	& > p {
		font-family: var(--font-family);
		font-size: 12px;
		line-height: 15px;
	}
`;
