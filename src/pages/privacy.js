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
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      The Internet of Things is, by definition, a collection of
      Internet-connected devices that communicate with centralized servers. This
      external storage and management of data is what makes IoT attractive to
      consumers: it makes devices such as security cameras essentially
      plug-and-play, avoiding the need to set up a home server and wiring like
      in standard systems. This convenience, though, comes at a cost: all this
      data, personal or not, is being transmitted off-premise and is therefore
      out of the control of the user.
    </Typography>
    <Typography variant="h5" component="h5">
      Why Do We Need IoT Security?
    </Typography>
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      Unlike when signing up for a subscription on a website, IoT devices gather
      personal information through sensors without active involvement from the
      user. This is where informed consent comes into play. Informed consent has
      mostly been a topic of discussion in the medical field but has recently
      become more prominent when discussing technology and, more specifically,
      data collection. Informed consent is like consent but adds one simple
      rule, making it much more robust: the stakeholder (in this case, the user
      of an IoT device) must know exactly what they are consenting to. [1]
    </Typography>
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      A simple example of informed consent in the medical field is that a
      patient should not only know the benefits of any medication they are
      taking but also all the potential side effects and risks associated with
      it. Applying the same logic to IoT devices is simple: the user must be
      informed of exactly what is being collected and where it might go (e.g.
      stored on servers or distributed to a 3rd party). Without this
      information, the user may still be consenting to something but it may be
      out of lack of knowledge; oftentimes, this would also lead to an unknown
      breach in their privacy.
    </Typography>

    <Typography variant="h5" component="h5">
      Big Data and Profiling
    </Typography>
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      The Internet of Things and Big Data are closely intertwined, simply
      because of the fact that IoT devices tend to feed companies’ data needs.
      In essence, Big Data is the collection of data on a massive scale to allow
      further investigation and analysis in the future.
    </Typography>
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      Many companies boast that they anonymize collected data and that it could
      never be traced back to their original source. This “anonymous” data is
      usually tied to some kind of random, internal identifier rather than by,
      for example, the user’s name. While this does technically mean that each
      data point cannot be linked to one specific person, when looking at a
      large data set (which is usually what happens when dealing with Big Data),
      it is often possible to know quite a lot about a person’s habits and
      whereabouts. [2]
    </Typography>
    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      Suppose a person owns an internet-connected coffee maker and shower head,
      which transmit at what time they are being used and for how long. This
      information may seem innocuous; who cares if the manufacturer knows if I’m
      making coffee, it’s just coffee! The problem here lies with the fact that
      the manufacturer now knows what your coffee making and showering habits
      are, and can draw conclusions if your habits suddenly change. For example,
      let’s say the coffee maker ran twice rather than once one morning, and
      that the shower reports more activity than usual. Did the user meet
      someone the day before? What if this starts happening every few days? The
      manufacturer now knows about the user’s habits and any personal
      information that might be derived from cross referencing with other data
      which can reveal intimate aspects of a person’s life; a breach of privacy.
      [3]
    </Typography>

    <Typography variant="h5" component="h5">
      Improving Consumer Privacy
    </Typography>

    <Typography
      variant="body1"
      component="body1"
      paragraph={true}
      display="block"
    >
      Most of the Internet of Things is still unregulated. The European Union’s
      General Data Protection Regulation (GDPR), that went into effect in mid
      2018, is a step in the right direction. Courts have also started to
      recognize people’s right to digital privacy. However, these things alone
      do not solve all the issues mentioned previously. Governments will need to
      step up and introduce strong legislation to prevent companies from
      reaching across ethical boundaries and endangering the privacy of
      consumers. They need to recognize that IoT devices, whether we like it or
      not, are here to stay, and create the perfect opportunity for
      manufacturers to collect vast amounts of personal data to the detriment of
      consumers and their privacy. [2]
    </Typography>

    <Typography variant="h5" component="h5">
      References
    </Typography>
    <ul>
      <li>
        <Typography variant="body1" component="body1">
          [1](
          <a href="https://www.sciencedirect.com/science/article/pii/S2542660518300532">
            https://www.sciencedirect.com/science/article/pii/S2542660518300532
          </a>
          ):
        </Typography>
      </li>
      <li>
        <Typography variant="body1" component="body1">
          [2](
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5972157/">
            Ethical Design in the Internet of Things
          </a>
          ):
        </Typography>
      </li>
      <li>
        <Typography variant="body1" component="body1">
          [3]Ethics in an Age of Surveillance, Cambridge University Press,
          Cambridge (2017)
        </Typography>
      </li>
    </ul>
  </Layout>
)

export default PrivacyPage
