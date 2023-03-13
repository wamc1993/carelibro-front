import styled from "@emotion/styled";

interface Properties {
	clickeable: boolean;
}

export const Container = styled.div<Properties>`
	display: flex;
	flex-direction: column;
	align-items: start;

	.author {
		font-weight: 700;
	}

	.date {
		align-self: end;
		color: ${(props: any) =>
			props.clickeable
				? props.theme.colors.primary[200]
				: props.theme.colors.gray[500]};
		cursor: ${(props) => (props.clickeable ? "pointer" : "default")};
	}

	.left-padding {
		width: 100%;
		padding-left: 1rem;
	}

	.mt {
		margin-top: 1rem;
	}
`;
