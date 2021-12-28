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

const SecondPage = () => (
  <Layout>
    <GlobalStyle />
    <Howitworksection />
  </Layout>
)

export default SecondPage
