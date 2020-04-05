import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import EnvironmentPageLogo from "../components/images/EnvironmentPageLogo"
import EWaterImage from "../components/images/EWaterImage"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 350px;
`

const GenericImageContainer = styled.div`
  margin: 50px auto;
  max-width: 700px;
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
    <div>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Consider this, there are 12.4 million homes in Canada. We believe that
        every home will have one or more IoT devices in their home in the not
        too distant future. That means at least 12.4 million devices on the web.
        From Google Home to the smart coffee maker, there are two traits shared
        by every IoT device: their connection to the web and they need the
        energy to operate.
      </Typography>

      <Typography variant="body1" component="body1">
        This has massive implications for our environment. There are three
        important environmental issues we would like to focus on. They are as
        follows:
      </Typography>
      <ol>
        <li>
          <Typography variant="body1" component="body1">
            Power Efficiency
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            Manufacturing Processes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            End of Life Disposal
          </Typography>
        </li>
      </ol>

      <Typography variant="h5" component="h5">
        Power Consumption
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        In electronics design, there is a war. The war is between efficiency,
        power consumption and cost among others. This war has serious ethical
        implications, particularly in the cost department. Is it ethical to
        sacrifice efficiency and power consumption for a lower BOM cost? Is it
        ethical to cut corners just to make the extra million?
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Consider a smoke alarm with a 1 uA quiescent current. Now consider that
        there are about 5 smoke alarms in every house. How much power does that
        consume? Well for the 12.4 million homes, that's about 7.4 kW just for
        the smoke alarms in Canada; we will use that as our benchmark.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Now, making efficient smoke alarm costs money. If we cut corners, that
        will save millions. Here’s the catch; the quiescent current of the less
        efficient smoke alarm is now 1 mA. How much power does that consume? 7.4
        MW of power. To save a million dollars, we waste megawatts of power.
        That power has to come from somewhere; and that somewhere is usually
        fossil fuels.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        So, is it ethical for a manufacturer to save a million dollars but
        making the society burn excess power?
      </Typography>

      <Typography variant="h5" component="h5">
        Manufacturing Process
      </Typography>
      <Typography variant="body1" component="body1">
        Look at this photo.
      </Typography>
      <GenericImageContainer>
        <EWaterImage />
      </GenericImageContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        What do you see? Is this what you think about when you think about the
        internet of things? You may not think about the manufacturing of IoT
        devices, but it is still an important consideration.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        For example, China. Electronics manufacture and export is at the core of
        their economy. Does this justify the wasteful way in which these widgets
        are produced? What about the workers in the factories? They work long
        hours in windowless rooms using dangerous compounds to make our everyday
        items. Many of these workers are getting sick working at these
        factories. Does our enjoyment outweigh their suffering?
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Moreover, is it ethical to produce such devices if they include harmful
        byproducts? Is it ethical for the developed countries to profit off of
        such technology at the expense of the developing nations and the poor?
      </Typography>

      <Typography variant="h5" component="h5">
        End of Life Disposal
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        The computer you’re reading this on, how long have you had it? How long
        do you expect to have it? What happened to your previous computer? What
        about your phone? Most people have never considered where their IoT
        devices go.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Let’s consider the US; in 2010 it was estimated that 258 million
        electronic devices were disposed of. It was also estimated that
        two-thirds of the discarded electronics were recycled. So what happens
        to the recycled material? More importantly, what about the other third
        that isn’t recycled?
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        The sad truth is that most discarded electronics are shipped to
        countries in Latin America, Asia, and Africa under false pretenses. The
        old electronics are usually labelled as “used goods” even though they do
        not usually function at all. Another sad part of this is that this is
        legally allowed to do.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        If exporting old broken electronics is legal, does that also mean it’s
        ethical? Is it ethical to take advantage of developing countries to
        further our own prosperity?
      </Typography>

      <Typography variant="h5" component="h5">
        What we can do
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        We believe it is unethical for companies to cut corners in the name of
        the bottom line. Whether they are reducing efficiency, manufacturing the
        product poorly, or have a complete disregard for the end of life of a
        product. So what can you do?
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        The best way you can fight this behaviour is by using your wallet; don’t
        buy anything from an unethical company. Research the options for IoT
        device manufacturers. Go with the one that has taken the care to
        safeguard the environment. Sure it will cost more, but ask yourself
        this: What does it cost us as a society to support companies that are
        making this planet uninhabitable?
      </Typography>

      <Typography variant="h5" component="h5">
        References
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" component="body1">
            [1](
            <a href="https://www150.statcan.gc.ca/n1/pub/11-402-x/2011000/chap/fam/fam-eng.htm">
              Families, Households and Housing
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [2](
            <a href="https://ieeexplore.ieee.org/document/7122861">
              The Power of Models: Modeling Power Consumption for IoT Devices
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [3](
            <a href="https://www.nationalgeographic.com/environment/2018/11/china-ban-plastic-trash-imports-shifts-waste-crisis-southeast-asia-malaysia/">
              China's ban on trash imports shifts waste crisis to Southeast Asia
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [4](
            <a href="https://www.needpix.com/photo/1276605/pollution-waters-smoke-industry-mill-free-pictures-free-photos-free-images-royalty-free">
              Pollution Waters Smoke Free Photo
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [5](
            <a href="https://www.bsr.org/reports/BSR_Electronics_Supply_Networks_Water_Pollution_in_China.pdf">
              Electronics Supply Networks and Water Pollution in China
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [6](
            <a href="https://www.wired.com/2015/04/inside-chinese-factories/">
              How China Is Screwing Over Its Poisoned Factory Workers
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [7](
            <a href="https://ourworld.unu.edu/en/toxic-e-waste-dumped-in-poor-nations-says-united-nations">
              Toxic E-Waste Dumped in Poor Nations, Says United Nations
            </a>
            ):
          </Typography>
        </li>
      </ul>
    </div>
  </Layout>
)

export default EnvironmentPage
