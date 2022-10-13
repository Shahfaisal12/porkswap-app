import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";





const Hero = () => {


  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="hero-section py-5 position-relative">
      <div className="particals position-absolute d-none d-md-block">

        <Particles
          id="tsparticles"
          init={particlesInit}

          options={{
            "fullScreen": {
              "enable": false,
              "zIndex": 1
            },
            "particles": {
              "number": {
                "value": 10,
                "density": {
                  "enable": false,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "star",
                "options": {
                  "sides": 5
                }
              },
              "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": ["grab"]
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "background": {
              "color": "",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          }}
        />

      </div>
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
