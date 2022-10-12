
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-section">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="https://porkswap.finance/assets/images/logo.png" width="190" className='img-fluid' alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Litepaper</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Platform</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Roadmap</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">FAQs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Audit Report</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header