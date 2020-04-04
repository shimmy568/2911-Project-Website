import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
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
      <Typography variant="h3" component="h1" align="center">
        Environmental Concerns With IOT
      </Typography>
    </div>
    <p>There is lots TODO</p>
    <div> Nick C has added stuff </div>
  </Layout>
)

export default EnvironmentPage
