import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IOTLogoImage from "../components/images/IOTLogoImage"
import IndexCard from "../components/IndexCard"
import { Grid } from "@material-ui/core"
import styled from "styled-components"
import {
  ImageContainer as ImageContainerRaw,
  PageTitle,
} from "../components/shared"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 500px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ImageContainer>
        <IOTLogoImage />
      </ImageContainer>
      <PageTitle>Ethics Surrounding Modern IOT Devices</PageTitle>
    </div>
    <p>TODO Put Introductiony stuffs here</p>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Environment"
          cardDesc="#TODO"
          cardDest="/environment/"
        />
      </Grid>
      <Grid item xs={6}>
        <IndexCard cardTitle="Legal" cardDesc="#TODO" cardDest="/legal/" />
      </Grid>
      <Grid item xs={6}>
        <IndexCard cardTitle="Privacy" cardDesc="#TODO" cardDest="/privacy/" />
      </Grid>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Security"
          cardDesc="#TODO"
          cardDest="/security/"
        />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
