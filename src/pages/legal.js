import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LegalPageLogo from "../components/images/LegalPageLogo"
import {
  ImageContainer as ImageContainerRaw,
  PageTitle,
} from "../components/shared"
import styled from "styled-components"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 650px;
`

const LegalPage = () => (
  <Layout>
    <SEO title="Legal" />
    <div>
      <ImageContainer>
        <LegalPageLogo />
      </ImageContainer>
      <PageTitle>Legal Problems With IOT</PageTitle>
    </div>
    <h1>LEGAL PAGE</h1>
    <p>TODO. Jared test</p>
  </Layout>
)

export default LegalPage
