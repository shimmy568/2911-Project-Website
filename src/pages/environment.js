import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ImageContainer as ImageContainerRaw,
  PageTitle,
} from "../components/shared"
import styled from "styled-components"
import EnvironmentPageLogo from "../components/images/EnvironmentPageLogo"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 350px;
`

const EnvironmentPage = () => (
  <Layout>
    <SEO title="Environment" />
    <div>
      <ImageContainer>
        <EnvironmentPageLogo />
      </ImageContainer>
      <PageTitle>Environmental Concerns With IOT</PageTitle>
    </div>
    <p>TODO</p>
  </Layout>
)

export default EnvironmentPage
