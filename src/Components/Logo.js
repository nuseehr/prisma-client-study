import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: 80%;
  margin: 0% 10% 15%;
`;

const Logo = ({ src }) => <Container src={src} />;

export default Logo;
