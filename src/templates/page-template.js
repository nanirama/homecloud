import * as React from "react"
import Layout from "../components/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components";
import { graphql } from "gatsby"


import Seo from "../components/seo"
import { Link } from "gatsby"
import GlobalStyle from '../layout/globalStyles';

const PageTemplate = (props)=>{
    const { data } = props
    const { PageData } = data
    console.log('Page Data',PageData.data.page_banner)
    const image = getImage(PageData.data.page_banner)
    const bgImage = convertToBgImage(image)
  return(
    <Layout>
       <GlobalStyle />
       <Wrapper>          
          <PageBanner>
          <BackgroundImage {...bgImage} preserveStackingContext className="pagebanner-bg">
            {/* <GatsbyImage image={getImage(PageData.data.page_banner)} /> */}
             <Container>
                <Heading>{PageData.data.title.text}</Heading>
                <div dangerouslySetInnerHTML={{ __html: PageData.data.subtext.html }} className="subtext" ></div>
             </Container>
          </BackgroundImage>
          </PageBanner>
          <Content>
             <Container>
                <div dangerouslySetInnerHTML={{ __html: PageData.data.content.text }} ></div>
             </Container>
          </Content>
       </Wrapper>
    </Layout>
)}

export const query = graphql`
query getPagesData($id: String!) {
  PageData : prismicPage(uid: {eq: $id}) {
    uid
    id
    data {
      title {
        html
        text
      }
      subtext {
        html
        text
      }
      content {
        html
        text
      }
      page_banner {
        gatsbyImageData(layout: FULL_WIDTH, width: 1800, placeholder: BLURRED)
      }
    }
  }
}
`
const Wrapper = styled.div`
padding:90px 0 0 0;
@media only screen and (max-width:800px){
padding:0;
}
`;
const PageBanner = styled.div`
.pagebanner-bg{
  padding:40px 0;
  @media only screen and (max-width:767px){
    padding:70px 0;
  }
}
// background: linear-gradient(104.71deg, #0047AD 34.23%, #0A5ACB 97.16%);

transform: matrix(1, 0, 0, 1, 0, 0);
position:relative;

p{
  color:#fff;
  margin:0;
  @media only screen and (max-width:767px){
    br{
      display:none;
    }
  }
}
`;
const Container = styled.div`
max-width: 830px;
margin: 0 auto;
padding: 0 15px;
position: relative;
.subtext{
  @media (min-width: 992px) {
    width:60% !important;
  }
  @media (max-width: 991px) {
    width:95% !important;
  }
}
`;
const Heading = styled.h2`
font-size:32px;
line-height: 43px;
letter-spacing: -0.44px;
color:#fff;
margin-bottom:16px;
`;
const Content = styled.div`
padding:55px 0;
h3{
  margin-bottom:40px;
}
p{
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07875px;
  span{
      margin-bottom:40px;
      display:inline-block;
  }
  a{
    color:#236DDE;
  }
}
ol{
  margin-bottom:20px;
}
h5{
  margin:30px 0;
  display:inline-block;
}
`;
export default PageTemplate