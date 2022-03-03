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
import Benefitssection from "../components/cityPages/Benefitssection";
import Featuressection from "../components/cityPages/Featuressection";
import Testimonialsection from "../components/Testimonialsection";
import Services from "../components/services"

import { BrowserView, TabletView, MobileView } from "react-device-detect"

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
      <Services/>
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

const ServicesBlock = styled.div`
.browserview, .tabletview, .mobileview{display:none;}
@media (min-width: 992px) {
  .browserview{display:block;}
}
@media only screen and (min-width: 701px) and (max-width: 991px) {
  .tabletview{display:block;}
}
@media (max-width: 700px) {
  .mobileview{display:block;}
  }

`;
