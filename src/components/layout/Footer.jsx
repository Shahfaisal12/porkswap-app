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
              <div class="footer-menu float-right d-flex align-items-center">
                  <a href="/" className="fw-bold text-decoration-none text-white">
                    <TbBrandGmail className="fs-3 " />
                  </a>
                  <a href="/" className="fw-bold text-decoration-none text-white">
                    <BsTwitter className="fs-3 " />
                  </a>
                  <a href="/" className="text-white">
                    <FaFacebookF className="fs-3 " />
                  </a>
                  <a href="/" className="text-white">
                    <ImYoutube2 className="fs-3 " />
                  </a>
                  <a href="/" className="text-white">
                    <RiSendPlaneFill className="fs-3 " />
                  </a>
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
