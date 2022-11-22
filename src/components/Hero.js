import React from 'react';
import { hero } from '../data';
import { SlArrowRightCircle } from 'react-icons/sl';
import { SlArrowDownCircle } from 'react-icons/sl';

const Hero = () => {
  const { title, subtitle, btnText, image, image_background_1 } = hero;
  return (
    <section className="Box_hero">
      <div className="Box_hero_flex">
        <div className="Box_hero_text">
          <h1 className="Text_1">{title}</h1>
          <p className="Text_2">{subtitle}</p>
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
            <div
              className="background_6"
              style={{ backgroundImage: `url(${image_background_1})` }}></div>
          </div>
        </div>
        <div className="Box_hero_image">
          <div className="flex_1">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
