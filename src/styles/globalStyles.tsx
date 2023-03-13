import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
	const theme = useTheme() as any;
	return (
		<Global
			styles={css`
				@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

				* {
					box-sizing: border-box;
					font-family: "Roboto", sans-serif;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					margin: 0px;
				}

				p {
					margin: 0px;
					font-size: 14px;
					line-height: 1.7;
					color: ${theme.colors.gray[300]};
				}

				button {
					border: none;
					height: 2rem;
					outline: none;
					cursor: pointer;
					padding: 0 0.5rem;
					border-radius: 5px;
				}

				input,
				textarea {
					width: 100%;
					outline: none;
					padding: 0 0.5rem;

					border-radius: 5px;
					border: 1px ${theme.colors.gray[500]} solid;
				}

				input {
					height: 2rem;
				}

				textarea {
					resize: none;
				}
			`}
		/>
	);
};
