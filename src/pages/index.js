import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IOTLogoImage from "../components/images/IOTLogoImage"
import IndexCard from "../components/IndexCard"
import { Grid, Typography, Divider } from "@material-ui/core"
import styled from "styled-components"
import { ImageContainer as ImageContainerRaw } from "../components/shared"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 500px;
`

const BodyContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`

const PaddedDivider = styled(Divider)`
  margin-top: 25px;
  margin-bottom: 25px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ImageContainer>
        <IOTLogoImage />
      </ImageContainer>
      <Typography variant="h3" component="h1" align="center">
        Ethics Surrounding Modern IOT Devices
      </Typography>
    </div>
    <BodyContainer>
      <PaddedDivider />
      <Typography variant="h5" component="h5">
        What Is IoT
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        IoT (Internet of Things) is a term for devices that are connected to the
        internet or other networks that allow them to communicate pieces of data
        with limited human interaction. Examples of this include smart speakers,
        smart fridges, smart TV’s and many many more. This continues to be a
        rapidly growing sector in the world of technology. This website’s aim is
        to look at the ethical concerns surrounding this emerging technology
        field and determine possible solutions for them. This will be crucial
        moving forward due their rapid development that we can currently see.
      </Typography>

      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        We will be looking at four different aspects of the ethical issues with
        IoT devices. The first being the environmental impact that they have.
        The next is the legal concerns that may come up when we talk about
        people's right to their personal devices and data that these devices
        collect. The third sections of issues that we’ll be discussing are the
        privacy concerns and how and if companies collect data that gets this
        personal. Lastly we will be looking at the security concerns that can
        come up if these devices are not properly secured. Hopefully this will
        provide a good overview of the problems that we will face in the future
        surrounding this brand new technology.
      </Typography>
      <PaddedDivider />
    </BodyContainer>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Environment"
          cardDesc="A closer look at the environmental impact of IoT devices"
          cardDest="/environment/"
        />
      </Grid>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Legal"
          cardDesc="An analysis of the legal problems surrounding IoT devices"
          cardDest="/legal/"
        />
      </Grid>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Privacy"
          cardDesc="A look into the privacy concerns with IoT devices"
          cardDest="/privacy/"
        />
      </Grid>
      <Grid item xs={6}>
        <IndexCard
          cardTitle="Security"
          cardDesc="A look into the security issues that IoT devices have"
          cardDest="/security/"
        />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
