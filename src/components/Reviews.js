import React from 'react';
import { reviews } from '../data';

const Reviews = () => {
  const { title, subtitle_1, image_1, title_1, image_symbol, image_background } = reviews;
  return (
    <section className="Box_Reviews">
      <a name="reviews"></a>
      <div className="Box_Reviews_text">
        <h1 className="Text_Reviews_1">{title}</h1>
      </div>
      <div className="Box_Reviews_flex">
        <div>
          <div
            className="background_Reviews"
            style={{ backgroundImage: `url(${image_background})` }}></div>
          <div className="img_Reviews">
            <img src={image_symbol} alt="" />
          </div>
          <p className="Text_Reviews_2">{subtitle_1}</p>
          <div className="img_Reviews">
            <img src={image_1} alt="" />
          </div>
          <p className="Text_Reviews_3">{title_1}</p>
        </div>
        <div>
          <div className="img_Reviews">
            <div
              className="background_Reviews"
              style={{ backgroundImage: `url(${image_background})` }}></div>
            <img src={image_symbol} alt="" />
          </div>
          <p className="Text_Reviews_2">{subtitle_1}</p>
          <div className="img_Reviews">
            <img src={image_1} alt="" />
          </div>
          <p className="Text_Reviews_3">{title_1}</p>
        </div>
        <div>
          <div className="img_Reviews">
            <div
              className="background_Reviews"
              style={{ backgroundImage: `url(${image_background})` }}></div>
            <img src={image_symbol} alt="" />
          </div>
          <p className="Text_Reviews_2">{subtitle_1}</p>
          <div className="img_Reviews">
            <img src={image_1} alt="" />
          </div>
          <p className="Text_Reviews_3">{title_1}</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
