import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LegalPageLogo from "../components/images/LegalPageLogo"
import { ImageContainer as ImageContainerRaw } from "../components/shared"
import { Typography, Divider } from "@material-ui/core"
import styled from "styled-components"

const ImageContainer = styled(ImageContainerRaw)`
  max-width: 650px;
`

const SmallParagraphContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`

const YellowHighlight = styled.div`
  display: inline;
  background-color: yellow;
`

const BodyContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`

const PaddedDivider = styled(Divider)`
  margin-top: 25px;
  margin-bottom: 25px;
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
    <BodyContainer>
      <PaddedDivider />
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Owning versus renting a product is almost universally understood by
        society but recently the waters have been muddied by technology
        companies through the introduction of IOT. Increasingly, consumers are
        losing ownership of the technology they purchase, while companies reap
        the rewards.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Let’s highlight some of the main ways companies pervert the meaning of
        ownership....
      </Typography>

      <Typography variant="h5" component="h5">
        Right to Advertised Functionality
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Consider the Amazon Alexa smart speaker system. Like many tech products,
        Alexa can be broken into two components: hardware and software.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        When consumers purchase an Amazon Alexa they purchase the device not for
        the hardware but for the things that the Alexa software can do for them
        like online shopping, playing music and controlling smart appliances.
        Consumers expect that because they have purchased the device they have
        the right to continue to use it for as long as they see fit. They are
        unaware that Amazon retains the right to effectively render the hardware
        they purchased useless by removing support for the software as shown in
        section 3.3 of the Amazon Alexa terms of service:
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          <b>3.3 Changes to Alexa; Amendments.</b>{" "}
          <YellowHighlight>
            We may change, suspend, or discontinue Alexa, or any part of it, at
            any time without notice.
          </YellowHighlight>{" "}
          We may amend any of this Agreement's terms at our sole discretion by
          posting the revised terms on the Amazon.com website. Your continued
          use of Alexa after the effective date of the revised Agreement
          constitutes your acceptance of the terms.
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Importantly, even when the product is working, Amazon cannot even
        guarantee the product will work as advertised.
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          <b>3.2 Functionality; Content.</b> We do not guarantee that Alexa or
          its functionality or content (including traffic, health, or stock
          information) is accurate, reliable, always available, or complete. You
          may encounter content through Alexa that you find offensive, indecent,
          or objectionable.{" "}
          <YellowHighlight>
            Amazon has no responsibility or liability for such content.
          </YellowHighlight>
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        And finally unlike products in any other segment of the market, Amazon
        retains the right to deny you from using the product that YOU purchased
        in a different geographical region
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          <b>3.4 Geographic Restrictions.</b> Alexa is operated in the United
          States.{" "}
          <YellowHighlight>
            We may restrict access to Alexa from other locations.
          </YellowHighlight>
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Everything mentioned is not just lawful but actually enforceable in
        court if Amazon so choses. Countless examples exist of companies selling
        hardware with the promise of free access to services for the lifetime of
        the product. Eventually the company confronts those same customers that
        already paid in full for the product with a subscription fee knowing
        full well that consumers would rather pay the subscription than throw
        out their product. And before you question whether a large company like
        Amazon would ever do such a thing, please consider section 1.6 of the
        terms of service:
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          <b>1.6 Fees.</b> AMCS does not currently charge fees for Alexa
          Communication, but{" "}
          <YellowHighlight>
            reserves the right to place limitations on use of certain services
            or features, including subscription or other fees.
          </YellowHighlight>{" "}
          You and/or the recipient of your calls or messages may be required to
          pay carrier fees for data usage. AMCS has no responsibility for such
          fees.
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Taken from:{" "}
        <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201809740">
          here
        </a>
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Although consumers still own the hardware they buy, they no longer own
        the required software rendering the hardware pretty much worthless in
        the future.
      </Typography>
      <Typography variant="h5" component="h5">
        Right to Repair
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Taken from:{" "}
        <a href="https://www.economist.com/science-and-technology/2017/06/19/new-technology-is-eroding-your-right-to-tinker-with-things-you-own">
          here
        </a>
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Smart home appliances and gadgets are not the only market segment
        undergoing the internet of things transformation. Farming equipment from
        the likes of John Deere has become increasingly computerized and
        internet dependent. Farmers no longer have the ability to repair their
        equipment, not for lack of education but because software, manuals and
        parts are simply not available. The only option John Deere offers is to
        hire an expensive corporate technician to fly out to the farm to perform
        the repair. John Deere has repeatedly claimed that farmers simply do not
        have the right to fix their equipment because they do not own it. For
        example here is a section taken from a letter John Deere wrote to the
        U.S. Copyright Office:
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          A vehicle owner does not acquire copyrights for software in the
          vehicle, and cannot properly by considered an “owner” of the vehicle
          software
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Taken from:{" "}
        <a href="https://www.copyright.gov/1201/2015/comments-032715/class%2021/John_Deere_Class21_1201_2014.pdf">
          here
        </a>{" "}
        (page 5, paragraph 2)
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Taken from: Wired magazine summed it up nicely when it wrote that
        “...John Deere and General Motors want to eviscerate the notion of
        ownership”
        <a href="https://www.wired.com/2015/04/dmca-ownership-john-deere/">
          https://www.wired.com/2015/04/dmca-ownership-john-deere/
        </a>
      </Typography>
      <Typography variant="h5" component="h5">
        Right to Resell
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Although every Tesla comes with basic driving assist features and the
        sensors for full self-driving, the software required for the car to take
        the wheel, called autopilot, is sold separately as an option. The
        software option costs $8000 at the time of purchase but unlike other
        more physical car options that consumers are used to, the autopilot
        option is not part of the car but belongs to the user.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        In December a Tesla Model S was resold by a local user car dealer which
        was advertised to have full autopilot functionality. However when the
        new owner received the car he discovered almost all of the promised
        features were absent. Tesla had remotely pushed a software update to the
        car which removed the features because the original owner was no longer
        using the car. The official statement from Tesla was
      </Typography>
      <SmallParagraphContainer>
        <Typography
          variant="body2"
          component="body2"
          paragraph={true}
          display="block"
        >
          Tesla has recent identified instances of customers being incorrectly
          configured for Autopilot versions that they did not pay for. Since,
          there was an audit done to correct these instances. Your vehicle is
          one of the vehicles that was incorrectly configured for Autopilot. We
          looked back at your purchase history and unfortunately Full-Self
          Driving was not a feature that <YellowHighlight>you</YellowHighlight>{" "}
          had paid for. We apologize for the confusion. If you are still
          interested in having those additional features we can begin the
          process to purchase the upgrade.
        </Typography>
      </SmallParagraphContainer>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        The keyword here is “you”. Tesla argues that each customer must purchase
        the rights to use their software and that these rights cannot be
        transferred with the car.
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        Taken from:{" "}
        <a href="https://www.theverge.com/2020/2/6/21127243/tesla-model-s-autopilot-disabled-remotely-used-car-update">
          here
        </a>
      </Typography>
      <Typography variant="h5" component="h5">
        What can be done
      </Typography>
      <Typography
        variant="body1"
        component="body1"
        paragraph={true}
        display="block"
      >
        As with many things there is no simple solution. Governments must take
        the lead and require companies to support their products with software,
        parts and documentation. But more importantly, consumers must
        demonstrate to companies that these issues are important to them. Voting
        with your wallet and avoiding brands with nasty practices is a step in
        the right direction and using your voice in public forums will put the
        pressure on companies to re-align with our values. We value the a long
        term functionality guarantee on the stuff we buy, we value the ability
        to repair our own stuff, and we value the right to resell our stuff when
        we are done with it.
      </Typography>
      <PaddedDivider />
    </BodyContainer>
  </Layout>
)

export default LegalPage
