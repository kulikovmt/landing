import React from 'react';
import { nav_1 } from '../data';
import { nav_2 } from '../data';
import { nav } from '../data';

const Nav = () => {
  const { btnText, icon_1 } = nav;
  return (
    <nav className="Nav_Header">
      <div className="Nav">
        <ul className="Nav_Header_p1">
          {nav_1.map((item, index) => {
            const { href, name } = item;
            return (
              <li key={index}>
                <a className="Nav_Header_stale_1" href={href}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="Nav_Header_p2">
          {nav_2.map((item, index) => {
            const { href, name } = item;
            return (
              <li key={index}>
                <a className="Nav_Header_stale_2" href={href}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="btn_box_header">
          <a href="test" target="_blank" rel="noreferrer">
            <button className="Btn_header">
              {btnText} <img src={icon_1} alt="" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
