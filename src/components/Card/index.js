import React from "react";
import styled from "styled-components";

const TitleCard = styled.button`
	border: 1px solid #dfe4ef;
	border-radius: 10px;
	background-color: white;
	width: 10rem;
	height: 5rem;
`;

const Anchor = styled.a`
	font-size: 2rem;
	${TitleCard}:hover & {
		cursor: pointer;
	}
`;

const Card = () => {
	return (
		<TitleCard>
			<Anchor>Hombre</Anchor>
		</TitleCard>
	);
};

export default Card;
