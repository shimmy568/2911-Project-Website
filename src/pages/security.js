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
      <Typography variant="h5" component="h5">
        Why Do We Need IoT Security?
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        There are currently 23 Billion [1] IoT devices out in the world with
        that number expected to grow to 60 billion by the end of 2025. With this
        huge number of devices out there we need to be extremely careful that
        all these devices are secure and safe for their users.
      </Typography>

      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        However currently this is unfortunately not the case, there are many IoT
        devices out there that are exploitable and as a result put not only
        people's privacy at risk but also their own safety. An example of this
        can be seen with a recent security breach that the company Ring dealt
        with where their smart security cameras were hacked on a large scale
        [2]. Resulting in things like people harassing children in their own
        bedrooms [2]. While this event is concerning and should definitely be
        dealt with, what concerns me more is if attacks like this occurred and
        the hacker didn’t make themselves known and remained undetected for
        months or even years.
      </Typography>
      <Typography variant="body1" component="body1">
        Some of the other security issues that we have to deal with are as
        follows:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" component="body1">
            Hackers creating botnets for cryptocurrency mining, DDoS attacks,
            and many more [1]
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            Security issues with automated vehicles and self driving cars that
            could result in severe loss of life [4]
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            Hackers getting access to our personal data for the purpose of
            identity theft or otherwise [1]
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" component="h5">
        What Can We Do?
      </Typography>

      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        So clearly something needs to be done, the question is just what can we
        do? The main consensus is that we need some sort of security standards
        put in place for the IoT industry. This could be done through optional
        certifications that companies choose to get, or it could be enforced at
        a government level to maintain consistency.
      </Typography>

      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        However due to the fact that there are already security standards in
        place [6] and the problem is still this widespread leads me to believe
        that this needs to be enforced on a government level. This is already
        being done in several cases. For example california has recently
        implemented legislation that requires companies to equip devices “with a
        reasonable security feature or features” [5]. However this wording is
        extremely vague and unless properly enforced will do little to solve
        this problem. Another example of government regulation would be NIST
        (U.S. National Institute of Standards and Technology) IoT security
        publications, while this work doesn’t set hard rules for companies to
        follow it does lay the groundwork for future legislation [5]. There has
        also been work done in the UK [5] to help secure IoT devices.
      </Typography>

      <Typography variant="h5" component="h5">
        Conclusion
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        So as I’ve demonstrated IoT security has never been more important and
        is only going to grow more rapidly in the future. Because of this it is
        essential that we lay the foundation for proper rules and regulations to
        ensure the security of not only our personal lives but our country as a
        whole. This can and is being done through private security certification
        programs but to ensure that proper security measures are taken it’s also
        important to enforce these regulations at the government level. We’ve
        already done a lot of good work towards this end, but there is still
        lots that needs to be done to ensure that our IoT devices are secured
        properly.
      </Typography>

      <Typography variant="h5" component="h5">
        References
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" component="body1">
            [1](
            <a href="https://www.peerbits.com/blog/biggest-iot-security-challenges.html">
              General concerns with IoT
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [2](
            <a href="https://www.washingtonpost.com/nation/2019/12/12/she-installed-ring-camera-her-childrens-room-peace-mind-hacker-accessed-it-harassed-her-year-old-daughter/?arc404=true">
              Child bedroom hack
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [3](
            <a href="https://www.cnet.com/news/iot-devices-need-security-standards-built-in-ul-says/">
              IoT needs security standards
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [4](
            <a href="https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/">
              Hackers kill jeep on highway
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [5](
            <a href="https://securityboulevard.com/2020/01/new-iot-security-regulations-what-you-need-to-know-2/">
              California & NSIT IoT security standards
            </a>
            ):
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="body1">
            [6](
            <a href="https://www.icsalabs.com/technology-program/iot-testing">
              ICSA security certification information
            </a>
            ):
          </Typography>
        </li>
      </ul>

      <PaddedDivider />
    </BodyContainer>
  </Layout>
)

export default SecurityPage
