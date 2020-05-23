import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-900 fixed w-full">
    <div className="pt-8 mx-auto
                    lg:w-1/3 xl:w-1/3 md:w-1/3 sm:w-full
                    text-center lg:text-left xl:text-left md:text-left sm:text-left">
      <div className="text-4xl font-sans font-bold">
        <Link to="/" className="uppercase text-purple-100">
          {siteTitle}
        </Link>
        <div className="flex flex-row">
          <Link className="flex w-full text-base" to={`/indexDeutschland`}>Deutschland</Link>
          <Link className="flex w-full text-base" to={`/indexDenmark`}>Dänemark</Link>
          <Link className="flex w-full text-base" to={`/indexSchweden`}>Schweden</Link>
          <Link className="flex w-full text-base" to={`/indexNorwegen`}>Norwegen</Link>
        </div>
      </div>
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
