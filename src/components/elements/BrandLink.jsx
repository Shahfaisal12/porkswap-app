import React from 'react'

const BrandLink = () => {
    return (
        <>
            <div className="brandlink-section pb-5 pt-2">
                <div className="container">
                    <div className="row">
                        <h3 className='fw-bold text-center pt-5'>As seen on</h3>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-3 col-6">
                            <a href="/" ><img className='img-fluid' width="160px" src="https://porkswap.finance/assets/images/featured/02246f50-3412-11eb-bfdd-de89f8b3b8b8.png" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-6">
                            <a href="/" ><img className='img-fluid' width="160px" src="https://porkswap.finance/assets/images/featured/logo-bloomberg.svg" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-6">
                            <a href="/" ><img className='img-fluid' width="160px" src="https://porkswap.finance/assets/images/featured/logo-benzinga.webp" alt="" /></a>
                        </div>
                        <div className="col-md-3 col-6">
                            <a href="/" ><img className='img-fluid' width="160px" src="https://porkswap.finance/assets/images/featured/news-btc.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default BrandLink