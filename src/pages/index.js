import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IOTLogoImage from "../components/images/IOTLogoImage"
import IndexCard from "../components/IndexCard"
import styled from "styled-components"
import { Grid } from "@material-ui/core"

const ImageContainer = styled.div`
  max-width: 500px;
  margin: auto;
`

const PageTitle = styled.h1`
  text-align: center;
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
    <p>TODO Put Introduction stuffs here</p>
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
