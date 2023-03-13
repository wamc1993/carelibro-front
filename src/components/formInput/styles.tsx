import styled from "@emotion/styled";

export const InputContainer = styled.div`
	label {
		font-weight: 700;
	}
`;

export const ErrorMessage = styled.p`
	height: 2rem;
	color: ${(props: any) => props.theme.colors.danger};
`;
