import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: 70%;
  margin: 0% 15% 15%;
`;

const Logo = ({ src }) => <Container src={src} />;

export default Logo;
