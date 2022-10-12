import React from "react";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 col-12">
            <div className="hero-content text-white pt-5">
              <h1 className="fw-bold">Decentralized Spot and Futures Trading on BSC</h1>
              <p>Automated market maker powered, taking De-Fi game to the next level. Make instant spot exchange, leveraged trades, provide liquidity to earn returns and rewards.</p>
              <div class="d-grid">
                <button class="btn btn-lg btn-warning" type="button">Spot Trading Platform Launched 🚀</button>
              </div>
              <hr color="white" />
              <div className="d-flex flex-wrap mt-3">
                <div className="btn btn-danger px-4 mb-2 mb-md-0">Earn PSWAP</div>
                <div className="btn btn-danger px-4 mb-2 mb-md-0 mx-2">Trade on PCS</div>
                <div className="btn btn-danger px-4 mb-2 mb-md-0">Governance</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="hero-img">
              <img src="https://porkswap.finance/assets/images/porkswap-pink.png" className="img-fluid" alt="Heroimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
