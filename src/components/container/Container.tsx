import styled from "@emotion/styled";

export type ContainerProps = {
	width?: number;
};

export const Container = styled.div<ContainerProps>`
	width: 100%;
	height: calc(100vh - 2rem);

	display: flex;
	flex-direction: column;
	padding: 1rem calc((100% - ${(props) => props?.width ?? 800}px) / 2);
`;
