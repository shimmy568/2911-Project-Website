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
  &:hover {
    text-decoration: underline;
    color: light-grey;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 50px`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HeaderLinkContainer>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderLinkContainer>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
