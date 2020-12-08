import React from "react"

import Header from "./header"
import Footer from "./footer"

import ContextProvider from "../provider/ContextProvider"

const Layout = ({ isHomePage, children }) => {
  return (
    <ContextProvider>
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <header className="global-header">
          <Header title={"Shator Boost"} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ContextProvider>
  )
}

export default Layout
