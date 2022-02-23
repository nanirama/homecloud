import React, { useState } from "react"
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
// import SEO from '../components/SEO';
// import Blog from '../components/blog';
// import { Header } from '../components/Blog';
// import styled from "styled-components";

import Herosection from "../components/cityPages/Herosection";
import Attractionssection from "../components/cityPages/Attractionssection";
import Howitworksection from "../components/cityPages/Howitworksection";
import Servicesection from "../components/Servicesection";
import Benefitssection from "../components/cityPages/Benefitssection";
import Featuressection from "../components/cityPages/Featuressection";
import Testimonialsection from "../components/Testimonialsection";

const CityPageTemplate = (props) => {
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
    const cityFeatures = body.filter((item)=>{
        return item.slice_type==='city_features'
    })
    const cityActivities = body.filter((item)=>{
        return item.slice_type==='city_activities'
    })
  if (!PageData) return null;
  return (
    <Layout page="home">
      <Herosection data={PageData} features={cityFeatures && cityFeatures}/>
      {cityActivities && <Attractionssection data={cityActivities} />}
      {howItWorks && <Howitworksection data={howItWorks} />}
      <Servicesection />
      {benefits && <Benefitssection id="benefits" data={benefits} />}
      <Featuressection id="whatsincluded" />
      <Testimonialsection />
      <DeserveSection page="home" />
    </Layout>
  );
};

export default CityPageTemplate;

export const query = graphql`
    query CityPageBySlug($id: String!) {
        PageData : prismicCityLandingPages(uid: {eq: $id}) {
        id
        data {
            title {
            text
            html
            }
            sub_heading
            description
            featured_image {
                url(imgixParams: {width: 1800, q: 100})
            }
            body {
            ... on PrismicCityLandingPagesDataBodyCityActivities {
                    id
                    slice_type
                    BenefitsHeading: primary {
                    description1
                    heading
                    }
                    items {
                    description1
                    heading
                    link
                    image {
                        gatsbyImageData(layout: CONSTRAINED, width: 400)
                    }
                }
            }
            ... on PrismicCityLandingPagesDataBodyCityFeatures {
                id
                slice_type
                items {
                heading
                short_text
                icon {
                    gatsbyImageData(layout: FIXED, height: 34)
                }
                }
            }
            ... on PrismicCityLandingPagesDataBodyHowItWorks {
                id
                slice_type
                items {
                item_text
                }
                primary {
                heading {
                    text
                    html
                }
                }
            }
            ... on PrismicCityLandingPagesDataBodyOurBenefits {
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
            }
        }
        }
    }
  
`;

const Wrapper = styled.div`
padding:80px 0 60px 0;
@media (max-width: 800px) {
padding:66px 0 40px 0;
}
`;
const Container = styled.div`
max-width: 840px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
