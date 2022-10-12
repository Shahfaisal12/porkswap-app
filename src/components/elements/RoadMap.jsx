import React from 'react'

const RoadMap = () => {
    return (
        <div className="roadmap-section py-5">
            <div className="container">
                <div className="row pb-5">
                    <h1 className='text-center fw-bold'>Product <span className='text-danger'>Roadmap</span></h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center mb-5">
                        <img className="img-fluid" src="https://porkswap.finance/assets/images/porkswap-timeline.png" alt='' />
                    </div>
                </div>
                <hr />
                <div className="row py-5">
                    <div className="col-md-8 col-12">
                        <img src="https://porkswap.finance/assets/images/gov.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className='fw-bold mb-4 text-center'>Governance Platform</h3>
                        <div className="d-flex justify-content-center">
                            <button className='btn btn-warning fw-bold'>Launched, Start Voting Now</button>
                        </div>

                        <div className="list pt-4">
                            <p className='mb-1 fw-bold'>You'll be able to vote for:</p>
                            <ul>
                                <li>Change in underlying protocol</li>
                                <li>Change in pricing oracle</li>
                                <li>Change in futures funding rate</li>
                                <li>Change in platform fees</li>
                                <li>Change inlist/de-list tokens</li>
                                <li>Propose new features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap