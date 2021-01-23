import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex justify-center bg-purple-900 fixed w-full z-10">
    <div className="pt-8 pb-8 mx-auto sm:mx-4
                    lg:w-2/3 xl:w-2/3 md:w-2/3
                    text-center lg:text-left xl:text-left md:text-left sm:text-left">
      <div className="text-4xl font-sans font-bold">
        <Link to="/" className="uppercase text-purple-100">
          {siteTitle}
        </Link>
        <div className="flex flex-row flex-wrap">
          <Link className="flex pr-4 text-base" to={`/indexDeutschland`}>Deutschland</Link>
          <Link className="flex pr-4 text-base" to={`/indexDenmark`}>Dänemark</Link>
          <Link className="flex pr-4 text-base" to={`/indexSchweden`}>Schweden</Link>
          <Link className="flex pr-4 text-base" to={`/indexNorwegen`}>Norwegen</Link>
          <Link className="flex pr-4 text-base" to={`/indexNeuseeland`}>Neusseland</Link>
          <Link className="flex pr-4 text-base" to={`/indexAustralien`}>Australien</Link>
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
