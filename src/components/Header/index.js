import React from "react";
import styled from "styled-components";
import Logo from "../Logo/";

const Container = styled.header`
	border: 1px solid #dfe4ef;
	width: 100vw;
	height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Header = () => {
	return (
		<Container>
			Header
			<Logo />
			Header
		</Container>
	);
};

export default Header;
