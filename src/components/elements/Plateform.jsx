import React from 'react'

const Plateform = () => {
  return (
    <div className="plateform-section py-5">
        <div className="container">
            <div className="row text-center mb-4">
                <h1 className='fw-bold'>Platform <span className='text-danger'>Interface</span></h1>
                <p className='fs-4'>De-Fi doesn't need to be boring, bringing UX focused interface</p>
            </div>
            <div className="row justify-content-center">
               <div className="col-md-8 col-12">
               <div className="img-plateform">
                    <img src="https://porkswap.finance/assets/images/platform/porkswap-product.png" className='img-fluid' alt="" />
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Plateform