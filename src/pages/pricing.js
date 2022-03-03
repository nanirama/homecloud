import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PricingSection from "../components/pricing/PricingSection";
import DeserveSection from "../components/DeserveSection";


const Pricing = (props) => {
  const { data } = props
  const { PageData } = data
  
    return(
    <Layout>
        <PricingSection data={PageData}/>
        <DeserveSection/>       
    </Layout>
  )
}
export const query = graphql`
  query getPricingPageData {
    PageData: prismicPagesPricing {
      data {
        description {
          richText
        }
        body {
          ... on PrismicPagesPricingDataBodyCertificateAddOns {
            id
            slice_type
            items {
              addon {
                document {
                  ... on PrismicCertificateAddons {
                    id
                    data {
                      name {
                        text
                        html
                      }
                      price_1
                      price_2
                      short_description
                      description {
                        richText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }  
`;
  export default Pricing