import styled from "@emotion/styled";

interface Properties {
	selectable: boolean;
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
		cursor: ${(props: any) => (props.selectable ? "pointer" : "default")};
		text-decoration: ${(props: any) =>
			props.selectable ? "underline" : "none"};
		color: ${(props: any) =>
			props.selectable
				? props.theme.colors.primary[200]
				: props.theme.colors.gray[200]};
	}
`;
