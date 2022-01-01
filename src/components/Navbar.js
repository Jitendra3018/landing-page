import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Menu = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#wgpt3">What is GPT3?</a>
		</p>
		<p>
			<a href="#possibility">Open AI</a>
		</p>
		<p>
			<a href="#features">Case Studies</a>
		</p>
		<p>
			<a href="#blog">Library</a>
		</p>
	</>
);

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<Gpt3Navbar>
			<Gpt3NavbarLinks>
				<Gpt3NavbarLinksLogo>
					<img src={logo} alt="Logo" />
				</Gpt3NavbarLinksLogo>
				<Gpt3NavbarLinksContainer>
					<Menu />
				</Gpt3NavbarLinksContainer>
			</Gpt3NavbarLinks>
			<Gpt3NavbarSign>
				<p>Sign In</p>
				<button type="button">Sign Up</button>
			</Gpt3NavbarSign>
			<Gpt3NavbarMenu>
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => {
							setToggleMenu(false);
						}}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => {
							setToggleMenu(true);
						}}
					/>
				)}
				{toggleMenu && (
					<Gpt3NavbarMenuContainer className="scale-up-center">
						<Gpt3NavbarMenuContainerLinks>
							<Menu />
							<Gpt3NavbarMenuContainerLinksSign>
								<p>Sign In</p>
								<button type="button">Sign Up</button>
							</Gpt3NavbarMenuContainerLinksSign>
						</Gpt3NavbarMenuContainerLinks>
					</Gpt3NavbarMenuContainer>
				)}
			</Gpt3NavbarMenu>
		</Gpt3Navbar>
	);
}

export default Navbar;

const Gpt3Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 4rem 2rem 5rem;

	@media screen and (max-width: 700px) {
		padding: 2rem 4rem;
	}

	@media screen and (max-width: 550px) {
		padding: 2rem;
	}
`;

const Gpt3NavbarLinks = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Gpt3NavbarLinksLogo = styled.div`
	margin-right: 5rem;

	& > img {
		width: 92.56px;
		height: 46.02px;
	}
`;

const Gpt3NavbarLinksContainer = styled.div`
	display: flex;

	& > p {
		color: #fff;
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 25px;
		text-transform: capitalize;
		margin: 0 1rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
			transform: scale(1.2);
			transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
		}
	}

	@media screen and (max-width: 1050px) {
		display: none;
		/* width: 1000px; */
	}
`;

const Gpt3NavbarSign = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > p {
		color: #fff;
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 25px;
		text-transform: capitalize;
		margin: 0 1rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
			transform: scale(1.2);
			transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
		}
	}

	& > button {
		padding: 0.5rem 1.5rem;
		color: #fff;
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 25px;
		background: #ff4820;
		border-radius: 5px;
		border: none;
		outline: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
			transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
		}
	}

	@media screen and (max-width: 550px) {
		display: none;
	}
`;

const Gpt3NavbarMenu = styled.div`
	margin-left: 1rem;
	display: none;
	position: relative;

	& > svg {
		cursor: pointer;
	}
	@media screen and (max-width: 1050px) {
		display: flex;
	}
`;

const Gpt3NavbarMenuContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
	text-align: end;
	background: var(--color-footer);
	padding: 2rem;
	position: absolute;
	top: 40px;
	right: 0px;
	margin-top: 1rem;
	min-width: 210px;
	border-radius: 5px;
	box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

	& > button {
		padding: 1rem 2rem;
		color: #fff;
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 25px;
		background: #ff4820;
		border-radius: 5px;
		border: none;
		outline: none;
		cursor: pointer;
	}

	@media screen and (max-width: 550px) {
		top: 20px;
	}
`;

const Gpt3NavbarMenuContainerLinks = styled.div`
	width: 200px;

	& > p {
		color: #fff;
		font-family: var(--font-family);
		font-weight: 500;
		font-size: 18px;
		line-height: 40px;
		text-transform: capitalize;
		margin: 0 1rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Gpt3NavbarMenuContainerLinksSign = styled(Gpt3NavbarSign)`
	display: none;
	margin-top: 1rem;

	& > button {
		margin: 1rem 1rem 0;
		padding: 0.5rem 1rem;
	}

	@media screen and (max-width: 550px) {
		display: block;
	}
`;
