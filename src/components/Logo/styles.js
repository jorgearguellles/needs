import styled from "styled-components";

const Container = styled.div`
	width: auto;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Letter = styled.span`
	font-size: 3rem;
	color: ${(props) => props.inputColor || "palevioletred"};

	${Container}:hover & {
		cursor: pointer;
		transform: scale(1.2);
	}
`;

export { Container, Letter };
