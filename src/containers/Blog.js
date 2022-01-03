import styled from "styled-components";
import Article from "../components/Article";

import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

function Blog() {
	return (
		<Gpt3Blog className="section1__padding" id="blog">
			<Gpt3BlogHeading>
				<h1 className="gradient__text">
					A lot is happening, We are blogging about it.
				</h1>
			</Gpt3BlogHeading>
			<Gpt3BlogContainer>
				<Gpt3BlogContainerGroupA>
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us explore how it is?"
					/>
				</Gpt3BlogContainerGroupA>
				<Gpt3BlogContainerGroupB>
					<Article
						imgUrl={blog02}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us explore how it is?"
					/>
					<Article
						imgUrl={blog03}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us explore how it is?"
					/>
					<Article
						imgUrl={blog04}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us explore how it is?"
					/>
					<Article
						imgUrl={blog05}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us explore how it is?"
					/>
				</Gpt3BlogContainerGroupB>
			</Gpt3BlogContainer>
		</Gpt3Blog>
	);
}

export default Blog;

const Gpt3Blog = styled.div`
	display: flex;
	flex-direction: column;
`;

const Gpt3BlogHeading = styled.div`
	width: 100%;
	text-align: left;
	margin-bottom: 5rem;

	& > h1 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 62px;
		line-height: 75px;

		@media screen and (max-width: 700px) {
			font-size: 46px;
			line-height: 52px;
		}

		@media screen and (max-width: 550px) {
			font-size: 34px;
			line-height: 42px;
		}
	}
`;

const Gpt3BlogContainer = styled.div`
	display: flex;

	@media screen and (max-width: 990px) {
		flex-direction: column-reverse;
	}
`;

const Gpt3BlogContainerGroupA = styled.div`
	flex: 0.75;
	margin-right: 2rem;

	@media screen and (max-width: 990px) {
		margin: 2rem 0;

		& > .gpt3__blog-container_article {
			width: 48%;

			& > .gpt3__blog-container_article-image {
				height: 250px;
			}

			@media screen and (max-width: 700px) {
				width: 100%;
			}
		}
	}
`;

const Gpt3BlogContainerGroupB = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 2rem;

		&
			> .gpt3__blog-container_article
			> .gpt3__blog-container_article-image {
			height: 250px;
		}
	}
`;
