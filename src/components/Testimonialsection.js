import React, {useState} from "react"
import styled from "styled-components";
import { Link } from "gatsby"


const Hero = () => {
  return(
  <Wrapper>
       <Container>
           <h2>Trusted by thousands</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. eiusmod mrore</p>
       </Container>
  </Wrapper>
  );
  };
export default Hero;

const Wrapper = styled.div`
padding:120px 0;
background: #F6F7F9;
text-align:center;
@media (max-width: 991px) {
    padding:70px 0;
}
@media (max-width: 767px) {
    padding:40px 0;
    p br{
        display:none;
    }
}
`;
const Container = styled.div`
max-width: 1230px;
margin: 0 auto;
padding: 0 15px;
`;

