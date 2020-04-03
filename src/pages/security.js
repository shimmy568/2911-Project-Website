import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ImageContainer as ImageContainerRaw,
  PageTitle,
} from "../components/shared"
import styled from "styled-components"
import SecurityPageLogo from "../components/images/SecurityPageLogo"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 450px;
`

const SecurityPage = () => (
  <Layout>
    <SEO title="Security" />
    <div>
      <ImageContainer>
        <SecurityPageLogo />
      </ImageContainer>
      <PageTitle>Security Issues With IOT</PageTitle>
    </div>
    <p>TODO</p>
  </Layout>
)

export default SecurityPage
