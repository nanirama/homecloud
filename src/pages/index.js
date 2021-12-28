import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import GlobalStyle from '../layout/globalStyles';

import Herosection from "../components/Herosection";
import Howitworksection from "../components/Howitworksection";
import Servicesection from "../components/Servicesection";
import Servicesection2 from "../components/Servicesection2";
import Benefitssection from "../components/Benefitssection";
import Featuressection from "../components/Featuressection";
import DeserveSection from "../components/DeserveSection";
import Testimonialsection from "../components/Testimonialsection";

const IndexPage = () => (
  <Layout page="home">
    <GlobalStyle />
    <Herosection />
    <Howitworksection />
    <Servicesection />
    {/* <Servicesection2 /> */}
    <Benefitssection id="benefits" />
    <Featuressection id="whatsincluded" />
    <Testimonialsection />
    <DeserveSection page="home" />
  </Layout>
)

export default IndexPage
