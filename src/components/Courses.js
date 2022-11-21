import React from 'react';
import { courses } from '../data';
import { SlArrowRightCircle } from 'react-icons/sl';

const Courses = () => {
  const {
    title,
    title_1,
    subtitle_1,
    btnText,
    title_2,
    subtitle_2,
    title_3,
    subtitle_3,
    title_4,
    subtitle_4,
    image_1,
    image_2,
    image_3,
    image_background_3,
    image_background_4,
    image_background_5,
  } = courses;
  return (
    <section className="Box_Courses">
      <a name="courses"></a>
      <div className="Box_Advantages_flex">
        <div className="Box_Courses_text">
          <h1 className="Text_Courses_1">{title}</h1>
          <div className="Box_Advantages_flex">
            <div className="Box_Courses_tetx_1">
              <p className="Text_Courses_2">{title_1}</p>
              <p className="Text_Courses_3">{subtitle_1}</p>
              <div>
                <a href="test" target="_blank" rel="noreferrer">
                  <button className="button_courses">
                    {btnText}
                    <SlArrowRightCircle />
                  </button>
                </a>
              </div>
            </div>

            <div className="Box_Advantages_flex">
              <div className="Box_Courses_tetx_2">
                <div
                  className="background_3"
                  style={{ backgroundImage: `url(${image_background_3})` }}></div>
                <div className="Box_Course_img">
                  <img src={image_1} alt="" />
                </div>
                <p className="Text_Courses_4">{title_2}</p>
                <p className="Text_Courses_5">{subtitle_2}</p>
              </div>
              <div className="Box_Courses_tetx_3">
                <div
                  className="background_4"
                  style={{ backgroundImage: `url(${image_background_4})` }}></div>

                <div className="Box_Course_img">
                  <img src={image_2} alt="" />
                </div>
                <p className="Text_Courses_4">{title_3}</p>
                <p className="Text_Courses_5">{subtitle_3}</p>
              </div>
              <div className="Box_Courses_tetx_4">
                <div
                  className="background_5"
                  style={{ backgroundImage: `url(${image_background_5})` }}></div>
                <div className="Box_Course_img">
                  <img src={image_3} alt="" />
                </div>
                <p className="Text_Courses_4">{title_4}</p>
                <p className="Text_Courses_5">{subtitle_4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
