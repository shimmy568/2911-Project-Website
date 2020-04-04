import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import styled from "styled-components"
import { Typography, Divider } from "@material-ui/core"
import SecurityPageLogo from "../components/images/SecurityPageLogo"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 450px;
`

const BodyContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`

const PaddedDivider = styled(Divider)`
  margin-top: 25px;
  margin-bottom: 25px;
`

const SecurityPage = () => (
  <Layout>
    <SEO title="Security" />
    <div>
      <ImageContainer>
        <SecurityPageLogo />
      </ImageContainer>
      <Typography variant="h3" component="h1" align="center">
        Security Issues With IOT
      </Typography>
    </div>
    <BodyContainer>
      <PaddedDivider />
      <Typography variant="h3" component="h3">
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
  </Layout>
)

export default SecurityPage
