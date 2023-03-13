import styled from "@emotion/styled";

export const Container = styled.div`
	gap: 1rem;
	display: flex;
	flex-direction: column;

	width: auto;
	overflow-y: scroll;
	padding-right: 1rem;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${(props: any) => props.theme.colors.primary[500]};
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb:active {
		background-color: ${(props: any) => props.theme.colors.primary[200]};
	}
`;
