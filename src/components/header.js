import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-900">
    <div
      className="p-6"
    >
      <div className="text-4xl font-sans font-bold">
        <Link
          to="/"
          className="uppercase text-white"
        >
          {siteTitle}
        </Link>
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
