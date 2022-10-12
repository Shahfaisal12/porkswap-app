import React from 'react'

const TokenDistribution = () => {
    return (
        <div className="token-distribution-section py-5">
            <div className="container-fluid">
                <div className="row">
                    <h1 className='text-center fw-bold'>Token <span className='text-danger'>Distribution</span></h1>
                </div>
                <div className="row pt-5">
                    <div className="col-md-6 m-auto py-5">
                        <div class="token-image position-realtive">
                            <div class="text-center token-image-graph-info" data-aos="fade-down" data-aos-duration="infinity">
                                <h5 class="fs-22"><strong>50%</strong></h5>
                                <strong>Liquidity Rewards (Locked)</strong>
                            </div>
                            <div class="token-image-shadow"></div>
                            <div class="text-center token-image-info">
                                <h5 class="fs-22"><strong>10%</strong></h5>
                                <span><strong>Growth Hacking</strong></span>
                            </div>
                            <div class="text-center token-image-info">
                                <h5 class="fs-22"><strong>10%</strong>
                                </h5><span><strong>Liquidity</strong></span>
                            </div>
                            <div class="text-center token-image-info">
                                <h5 class="fs-22"><strong>10%</strong></h5>
                                <span><strong>Team - locked</strong></span>
                            </div>
                            <div class="text-center token-image-info">
                                <h5 class="fs-22"><strong>20%</strong></h5>
                                <span><strong>Public Sale</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenDistribution