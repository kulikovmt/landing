import React from 'react';
import { hero } from '../data';
import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowDownCircle } from 'react-icons/sl';

const Hero = () => {
  const { title, subtitle, btnText, image } = hero;
  return (
    <section className="Box_hero">
      <div className="Box_hero_flex">
        <div className="Box_hero_text">
          <h1 className="Text_1">{title}</h1>
          <p className="Text_2">{subtitle}</p>

          {/* <div className="flex_2" style={{ backgroundImage: `url(${image_background_1})` }}>
          {/* <img src={image_background_1} alt="" /> 
          </div> */}

          {/* <div className="flex_3">
          <img src={image_background_2} alt="" />
          </div>  */}
          <div>
            <a href="test" target="_blank" rel="noreferrer">
              <button className="button_hero">
                {btnText}
                <SlArrowRightCircle />
              </button>
            </a>
          </div>

          <div className="Box_hero_btn_down">
            <a href="#about">
              <button className="button_hero_down">
                <SlArrowDownCircle />
              </button>
            </a>
          </div>
          {/* <div className="flex_5">
          <img src={image_background_4} alt="" />
          </div>
          <div className="flex_6">
          <img src={image_background_5} alt="" />
          </div> */}
        </div>
        <div className="Box_hero_image">
          <div className="flex_1">
            <img src={image} alt="" />
          </div>
        </div>
        {/* <div className="flex_4">
          <img src={image_background_3} alt="" />
        </div> */}
      </div>
    </section>
  );
};
export default Hero;
