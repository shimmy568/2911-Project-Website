import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"
import PrivacyPageLogo from "../components/images/PrivacyPageLogo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import styled from "styled-components"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 450px;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <div>
      <ImageContainer>
        <PrivacyPageLogo />
      </ImageContainer>
      <Typography variant="h3" component="h1" align="center">
        Privacy Issues With IoT
      </Typography>
    </div>
    <p>TODO</p>
  </Layout>
)

export default PrivacyPage
