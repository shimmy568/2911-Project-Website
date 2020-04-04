import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderLinkContainer = styled.h1`
  margin: 0;
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: fit-content;
  &:hover {
    text-decoration: underline;
    color: light-grey;
  }
`

const TitleLink = styled(HeaderLink)`
  margin-left: 50px;
`

const PageLink = styled(HeaderLink)`
  margin: 5px 10px;
  font-size: 0.7em;
`

const PageLinkContainer = styled.div`
  float: right;
  width: fit-content;
`

const Header = ({ siteTitle }) => {
  // console.log(window.location.pathname)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <HeaderLinkContainer>
          <TitleLink to="/">{siteTitle}</TitleLink>
          <PageLinkContainer>
            <PageLink to="/environment/">Environment</PageLink>
            <PageLink to="/legal/">Legal</PageLink>
            <PageLink to="/privacy/">Privacy</PageLink>
            <PageLink to="/security/">Security</PageLink>
          </PageLinkContainer>
        </HeaderLinkContainer>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
