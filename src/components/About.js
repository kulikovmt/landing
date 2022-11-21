import React from 'react';
import { about } from '../data';
import { SlArrowRightCircle } from 'react-icons/sl';

const About = () => {
  const { title, subtitle, title_2, btnText, image, image_stat } = about;
  return (
    <section className="Box_About">
      <a name="about"></a>
      <div className="Box_About_flex">
        <div className="Box_About_text">
          <h1 className="Text_About_1">{title}</h1>
          <p className="Text_About_2">{subtitle}</p>
          <p className="Text_About_3">{title_2}</p>
          <div className="Box_About_state">
            <div className="flex_4">
              <img src={image_stat} alt="" />
            </div>
          </div>
          <div>
            <a href="test" target="_blank" rel="noreferrer">
              <button className="button_about">
                {btnText}
                <SlArrowRightCircle />
              </button>
            </a>
          </div>
        </div>
        <div className="Box_About_image">
          <div className="flex_3">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
