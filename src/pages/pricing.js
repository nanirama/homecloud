import * as React from "react"
import Layout from "../components/layout"
import GlobalStyle from '../layout/globalStyles';
import PricingSection from "../components/pricing/PricingSection";
import DeserveSection from "../components/DeserveSection";


const Pricing = () => (
    <Layout>
        <GlobalStyle />
        <PricingSection/>
        <DeserveSection/>
       
    </Layout>
  )
  
  export default Pricing