import styled from "@emotion/styled";

interface ContainerProps {
	withScroll: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: auto;

	overflow-y: ${(props) => (props.withScroll ? "scroll" : "auto")};

	${(props: any) =>
		props.withScroll
			? `
	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${props.theme.colors.primary[500]};
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb:active {
		background-color: ${props.theme.colors.primary[200]};
	}
	`
			: ""};

	.no-comments {
		text-align: center;
		margin: 1rem 0;
	}
`;
