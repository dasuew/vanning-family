import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-900 fixed w-full z-10">
    <div className="pt-8 pb-8 mx-auto sm:pl-4 sm:pr-4 
                    lg:w-2/3 xl:w-2/3 md:w-2/3 sm:w-full
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
          <Link className="flex w-full text-base" to={`/indexNeuseeland`}>Neusseland</Link>
          <Link className="flex w-full text-base" to={`/indexAustralien`}>Australien</Link>
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
