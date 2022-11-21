import React from 'react';
import { footer } from '../data';
import Nav from '../components/Nav';

const Footer = () => {
  const { logo, subtitle_1, subtitle_2, icon_1, icon_2, icon_3 } = footer;
  return (
    <footer>
      <div className="Footer">
        <div className="Footer_flex">
          <div className="Footer_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="Box_Footer_text">
            <p className="Text_footer_1">{subtitle_1}</p>
            <p className="Text_footer_2">{subtitle_2}</p>
          </div>
          <div className="Footer_flex">
            <div className="">
              <button className="Btn_Fotter_1">
                <img src={icon_1} alt="" />
              </button>
            </div>
            <div className="">
              <button className="Btn_Fotter_2">
                <img src={icon_2} alt="" />
              </button>
            </div>
            <div className="">
              <button className="Btn_Fotter_3">
                <img src={icon_3} alt="" />
              </button>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
