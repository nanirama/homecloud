import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import Bannersection from "../components/durham/Bannersection";
import TopContent from "../components/durham/top-content";
import Howitworksection from "../components/home/Howitworksection";
import Servicesection from "../components/Servicesection";
import Benefitssection from "../components/home/Benefitssection";
import Featuressection from "../components/home/Featuressection";
import DeserveSection from "../components/DeserveSection";
import Testimonialsection from "../components/Testimonialsection";


const DurhamPage = (props) => {
    const { data } = props
    const { PageData } = data
    //console.log('PageData', PageData)
    const { body } = PageData.data
    const benefits = body.filter((item)=>{
      return item.slice_type==='our_benefits'
    })
    const howItWorks = body.filter((item)=>{
      return item.slice_type==='how_it_works'
    })
return(
<Layout page="home">
  <Bannersection/>
  <TopContent/>
  <Howitworksection data={howItWorks} />
    <Servicesection />
    {/* <Servicesection2 /> */}
    {benefits && <Benefitssection id="benefits" data={benefits} />}
    <Featuressection id="whatsincluded" />
    <Testimonialsection />
    <DeserveSection page="home" />
</Layout>
);
};


export const query = graphql`
query getDurhamData{
  PageData : prismicHome {
    id
    data {
      title {
        text
        html
      }
      description
      body {
        ... on PrismicHomeDataBodyOurBenefits {
          id
          slice_type
          primary {
            tab_heading
          }
          items {
            heading
            content
            image {
              gatsbyImageData(layout: FULL_WIDTH, width: 750)
            }
          }
        }
        ... on PrismicHomeDataBodyHowItWorks {
          id
          slice_type
          primary {
            heading {
              html
              text
            }
          }
          items {
            item_text
          }
        }
      }
    }
  }
}
`;
export default DurhamPage;
const Outer = styled.div`
padding:80px 0 30px 0;
@media (max-width: 800px) {
padding:0 0 40px 0;
}
`;
const Wrapper = styled.div`
background-color:#f1f1f1;
padding:60px 0;

`;
const Container = styled.div`
max-width:1200px;
margin:0 auto;
padding:0 15px;
`;

