import styled from "styled-components";

function Article({ imgUrl, date, title }) {
	return (
		<Gpt3BlogContainerArticle className="gpt3__blog-container_article">
			<Gpt3BlogContainerArticleImage className="gpt3__blog-container_article-image">
				<img src={imgUrl} alt="Blog" />
			</Gpt3BlogContainerArticleImage>
			<Gpt3BlogContainerArticleContent>
				<p>{date}</p>
				<h3>{title}</h3>
				<p>Read Full Article</p>
			</Gpt3BlogContainerArticleContent>
		</Gpt3BlogContainerArticle>
	);
}

export default Article;

const Gpt3BlogContainerArticle = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--color-footer);
`;

const Gpt3BlogContainerArticleImage = styled.div`
	width: 100%;
	height: 100%;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

const Gpt3BlogContainerArticleContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	height: 100%;

	& > p {
		font-family: var(--font-family);
		font-weight: bold;
		font-size: 14px;
		line-height: 35px;
		color: #fff;
	}

	& > h3 {
		font-family: var(--font-family);
		font-weight: 800;
		font-size: 25px;
		line-height: 30px;
		color: #fff;
		margin-bottom: 5rem;
		cursor: pointer;

		@media screen and (max-width: 550px) {
			font-size: 18px;
			line-height: 25px;
		}
	}

	& > p:last-child {
		cursor: pointer;
	}
`;
