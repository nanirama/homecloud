import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from './layout/globalStyles';
const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      {children}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
