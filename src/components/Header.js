import React from 'react';
import SocialBox from 'components/SocialBox'

const Header = () => {
  return (
    <header id="home">
      <div className="bg-img">
        <div className="overlay"></div>
      </div>
      <div className="home-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="home-content">
                <h1 className="white-text">vilelf</h1>
                <SocialBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
