import * as React from "react"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import FaqSection from "../components/faq/FaqSection";

const Faq = (props) => {
  console.log('Props', props)
  return(
    <Layout>
      <FaqSection/>   
      <DeserveSection/>
    </Layout>
  )
}
  
  export default Faq