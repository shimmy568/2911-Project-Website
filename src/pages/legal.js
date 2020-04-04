import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LegalPageLogo from "../components/images/LegalPageLogo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import { Typography } from "@material-ui/core"
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
      <Typography variant="h3" component="h1" align="center">
        Legal Problems With IOT
      </Typography>
    </div>
    <h1>LEGAL PAGE</h1>
    <p>TODO. Jared test</p>
  </Layout>
)

export default LegalPage
