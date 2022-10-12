import React from 'react'

const Utilities = () => {

    const cardData = [{
        id: '1',
        image: 'https://porkswap.finance/assets/images/u1.png',
        title: 'Governance',
        content: 'Vote to modify underlying protocol, change in pricing oracle, futures funding rate, platform fees, list/de-list tokens, new features'
    }, {
        id: '2',
        image: 'https://porkswap.finance/assets/images/u2.png',
        title: 'Incentives',
        content: 'Liquidity providers will be incentivized in $PSWAP for their participation in spot and leverage liquidity pools, and LP tokens can be staked for ARR of around 125%.'
      
    }, {
        id: '3',
        image: 'https://porkswap.finance/assets/images/u3.png',
        title: 'Deflation',
        content: 'With a fixed supply of 1 million tokens, and only 200,000 in circulation, $PSWAP token will increase in value overtime since it will be scarce and the team will buy back and burn tokens from platform revenue generated through spot and futures trading.'
    },]

  return (
    <div className="Utalities py-5" style={{backgroundColor:'#f3f7fa'}}>
        <div className="container">
            <div className="row mb-5">
                <h1 className='fw-bold text-center'>$PSWAP <span className='text-danger'>Utilities</span></h1>
            </div>
            <div className="row">
            {
                        cardData.map((cardItem) => {

                            return (
                                <div className="col-md-4 col-12 mt-3 mt-md-0" id='card-list' key={cardItem.id}>
                                    <div className="card shadow-sm d-block justify-content-center p-3 pb-5 h-100 border-0" >
                                        <div className="">
                                            <img src={cardItem.image} alt="..." width="80px" />
                                        </div>
                                        <div className="card-body">
                                            <h5 class="card-title fw-bold">{cardItem.title}</h5>
                                            <p className="card-text">{cardItem.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default Utilities