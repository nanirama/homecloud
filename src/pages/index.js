import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Herosection from "../components/home/Herosection";
import Howitworksection from "../components/home/Howitworksection";
import Servicesection from "../components/Servicesection";
import Benefitssection from "../components/home/Benefitssection";
import Featuressection from "../components/home/Featuressection";
import DeserveSection from "../components/DeserveSection";
import Testimonialsection from "../components/Testimonialsection";


const IndexPage = (props) => {
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
    <Herosection data={PageData} />
    <Howitworksection data={howItWorks} />
    <Servicesection />
    {/* <Servicesection2 /> */}
    {benefits && <Benefitssection id="benefits" data={benefits} />}
    <Featuressection id="whatsincluded" />
    <Testimonialsection />
    <DeserveSection page="home" />
  </Layout>
)}


export const query = graphql`
query getHomeData{
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
export default IndexPage
