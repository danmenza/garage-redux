import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpg')"}}></div>
      <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>
        Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).
      </p>
      {props.children}
    </div>
  );
};

export default Sidebar;
