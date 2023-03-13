import styled from "@emotion/styled";

export const Separator = styled.hr`
	width: 100%;
	margin: 1rem 0;
	border: 1px solid ${(props: any) => props.theme.colors.primary[400]};
`;
