import React from "react";

import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbBrandGmail } from "react-icons/tb";

const Footer = () => {
  return (
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="p-2 col-md-6 col-12">
              <div className="footer-logo">
                <img
                  src="https://porkswap.finance/assets/images/logo.png"
                  className="img-fluid"
                  width='200'
                  alt="logo"
                />
                <p className="mt-3 text-white">
                  Decentralized Spot and Futures <br /> Trading on Binance Smart Chain
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
             <div className="row mt-2">
             <div class="footer-menu d-flex align-items-center justify-content-end mb-3">
                  <a href="/" className="fw-bold text-decoration-none text-white mx-2">
                    <TbBrandGmail className="fs-3 " />
                  </a>
                  <a href="/" className="fw-bold text-decoration-none text-white mx-2">
                    <BsTwitter className="fs-3 " />
                  </a>
                  <a href="/" className="text-white mx-2">
                    <FaFacebookF className="fs-3 " />
                  </a>
                  <a href="/" className="text-white mx-2">
                    <ImYoutube2 className="fs-3 " />
                  </a>
                  <a href="/" className="text-white mx-2">
                    <RiSendPlaneFill className="fs-3 " />
                  </a>
                </div> 
                
                <div className="row px-0">
                  <a href="/" className="d-flex justify-content-end text-decoration-none text-white mt-1">exchange@porkswap.finance</a>
                </div>
             </div>
              </div>

          </div>
          <hr className="text-white border-sm" />
          <div className="copy-right text-center text-white p-2">
            <p>Copyright © 2022 PorkSwap.finance</p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
