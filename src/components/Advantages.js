import React from 'react';
import { advantages } from '../data';

const Advantages = () => {
  const {
    title,
    title_1,
    title_2,
    title_3,
    title_4,
    subtitle_1,
    subtitle_2,
    subtitle_3,
    subtitle_4,
    image_1,
    image_2,
    icons_1,
    icons_2,
    icons_3,
    icons_4,
  } = advantages;
  return (
    <section className="Box_Advantages">
      <div className="Box_Advantages_flex">
        <a name="advantages"></a>
        <div className="Box_Advantages_text">
          <h1 className="Text_Advantages_1">{title}</h1>
          <div className="flex_advanteges_between">
            <div className="Box_Advantages_TextCommon_1">
              <div className="Box_Advantages_text_1">
                <div className="flex_advanteges">
                  <div className="icons_advantages_1">
                    <img src={icons_1} alt="" />
                  </div>
                  <p className="Text_Advantages_2">{title_1}</p>
                </div>
                <p className="Text_Advantages_3">{subtitle_1}</p>
              </div>

              <div className="Box_Advantages_text_2">
                <div className="flex_advanteges">
                  <div className="icons_advantages_1">
                    <img src={icons_2} alt="" />
                  </div>
                  <p className="Text_Advantages_4">{title_2}</p>
                </div>

                <p className="Text_Advantages_5">{subtitle_2}</p>
              </div>
            </div>
            <div>
              <img src={image_1} alt="" />
            </div>
          </div>
          <div className="flex_advanteges_between">
            <div className="Box_Advantages_TextCommon_2">
              <div className="Box_Advantages_text_1">
                <div className="flex_advanteges">
                  <div className="icons_advantages_1">
                    <img src={icons_3} alt="" />
                  </div>
                  <p className="Text_Advantages_2">{title_3}</p>
                </div>
                <p className="Text_Advantages_3">{subtitle_3}</p>
              </div>
              <div className="Box_Advantages_text_2">
                <div className="flex_advanteges">
                  <div className="icons_advantages_1">
                    <img src={icons_4} alt="" />
                  </div>
                  <p className="Text_Advantages_4">{title_4}</p>
                </div>
                <p className="Text_Advantages_5">{subtitle_4}</p>
              </div>
            </div>
            <div className="image_2_advantage">
              <img src={image_2} alt="" />
            </div>
          </div>
        </div>
        {/*<div className="Box_Advantages_image"></div> */}
        {/* <div className="flex_5">
          <img src={image_1} alt="" />
        </div>
        <div className="flex_6">
          <img src={image_2} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Advantages;
