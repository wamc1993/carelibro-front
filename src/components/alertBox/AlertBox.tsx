import styled from "@emotion/styled";

export const AlertBox = styled.div`
	width: 100%;
	margin: 1rem 0;
	padding: 1rem;
	background-color: ${(props: any) => props.theme.colors.warning[400]};
	border-radius: 10px;
`;
