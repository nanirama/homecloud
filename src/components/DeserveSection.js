import * as React from "react"
import styled from "styled-components";

import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const DeserveSection = () => {
   const { DeserveImg} = useStaticQuery(
      graphql`
        query {
         DeserveImg: file(relativePath: {eq: "home.png"}) {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 200)
            }
          }
        }
      `
    )
   

return(
   <DeserveBlk>
      <Container>
         <GatsbyImage image={getImage(DeserveImg)} />
         <h2>You Deserve More From Your Home
            Get It With HomeCloud
         </h2>
         <Link to="/" className="btn">
         Digitize My Home</Link>
         <p>
            <Link to="/">
            Starting at $399</Link>
         </p>
         <p>(for a 2,500 sq. ft. home) </p>
      </Container>
   </DeserveBlk>
   );
   };
   
   
export default DeserveSection;  

const Container = styled.div`
max-width: 500px;
margin: 0 auto;

@media only screen and (max-width:767px){
   max-width: 100%;
}
`;

const DeserveBlk = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
padding: 96px 15px;
background: #F6F7F9;
@media only screen and (max-width:767px){
padding:50px 15px;
}
h2{
   font-size:32px;
   line-height:43px;
   margin:30px 0; 
      @media only screen and (max-width:767px){
         font-size:28px;
         line-height:34px;
      }
}
p{
   color:#6C7884;
   font-size: 14px;
   line-height: 20px;
   margin:0;
   display: flex;
   justify-content: center;
}
p a{
   color:#236DDE;
   font-weight:700; 
   text-decoration: underline; 
   margin-top:18px;
 }

`;


