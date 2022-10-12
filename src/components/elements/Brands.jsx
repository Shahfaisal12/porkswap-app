import React from 'react'

const Brands = () => {
  return (
    <div className="brand-section pb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-6">
                    <a href="/"><img src="https://porkswap.finance/assets/images/featured/cmc-logo.png" alt=""  className='img-fluid mt-3 mt-md-0' width="180px" /></a>
                </div>
                <div className="col-md-3 col-6">
                    <a href="/"><img src="https://porkswap.finance/assets/images/featured/cg-logo.webp" alt=""  className='img-fluid mt-3 mt-md-0' width="180px" /></a>
                </div>
                <div className="col-md-3 col-6">
                    <a href="/"><img src="https://porkswap.finance/assets/images/featured/hb-logo.png" alt=""  className='img-fluid mt-3 mt-md-0' width="180px" /></a>
                </div>
                <div className="col-md-3 col-6">
                    <a href="/"><img src="https://porkswap.finance/assets/images/featured/cb-logo.png" alt=""  className='img-fluid mt-3 mt-md-0' width="130px" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands