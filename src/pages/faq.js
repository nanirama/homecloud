import * as React from "react"
import Layout from "../components/layout"
import GlobalStyle from '../layout/globalStyles';
import DeserveSection from "../components/DeserveSection";
import FaqSection from "../components/faq/FaqSection";




const Faq = () => (
    <Layout>
        <GlobalStyle />
     <FaqSection/>
   
     <DeserveSection/>
    </Layout>
  )
  
  export default Faq