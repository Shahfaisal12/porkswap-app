import React from 'react'

const cardData = [{
    id: '1',
    image: 'https://porkswap.finance/assets/images/features/f1.svg',
    title: 'Deflationary',
    content: 'While other spot platform tokens mint 750,000 tokens per day, were aiming to burn 10% everyday through the revenue generated from the platform. Increasing the value of token over 30X within a year.'
}, {
    id: '2',
    image: 'https://porkswap.finance/assets/images/features/f2.svg',
    title: 'Community Governance',
    content: 'We believe in democratizing access to finance, what else can be a better way to give entire power to the community. Create custom polls, vote for good ones, bring new ideas to the table, change the world for better.'
  
}, {
    id: '3',
    image: 'https://porkswap.finance/assets/images/features/f3.svg',
    title: 'Future Trading',
    content: 'Bringing forward the true meaning of De-Fi that is decentralizing current financial products, bringing derivatives through futures trading so you can increase your returns on profit. Buy long or sell short, it is on you.'
}, {
    id: '4',
    image: '	https://porkswap.finance/assets/images/features/f6.svg',
    title: 'Spot Trading',
    content: 'Improved automated market maker to provide instant fulfillment of orders with less slippage, exchange your favourite tokens with 10 times less gas than Ethereum.'
}, {
    id: '5',
    image: 'https://porkswap.finance/assets/images/features/f4.svg',
    title: 'Lottery',
    content: 'Try your luck by gambling the extra tokens that you made by providing liquidity, with a chance to 100X your investment.'
}, {
    id: '6',
    image: '	https://porkswap.finance/assets/images/features/f5.svg',
    title: 'Security',
    content: 'While other projects are getting DNS hijacked, we ensure the security of our platform from DNS all the way to Smart Contract are state-of-the-art secured.'
},]

const Cards = () => {
    return (
        <div className="cards-section py-5 position-relative">
            <div className="container">
                <div className="row">
                    {
                        cardData.map((cardItem) => {

                            return (
                                <div className="mycard col-md-4 col-12 mt-3 mt-md-0" id='card-list' key={cardItem.id}>
                                    <div className="card d-block justify-content-center py-5 border-0" > {/* style={{width: '18rem'}} */}
                                        <div className="d-flex justify-content-center">
                                            <img src={cardItem.image} alt="..." width="80px" />
                                        </div>
                                        <div className="card-body text-center">
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

export default Cards