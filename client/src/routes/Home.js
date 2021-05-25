import React from 'react';
import Navigation from 'components/Navigation';
import 'routes/css/Home.css';
import Title from 'components/HomeComponents/Title';
import Introduction from 'components/HomeComponents/Introduction';
import Magazine from 'components/HomeComponents/Magazine';
import BpVideo from 'components/HomeComponents/BpVideo';
import Lookbook from 'components/HomeComponents/Lookbook';
import Matching from 'components/HomeComponents/Matching';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* SECTIONS */}
      {/* 01: TITLE SECTION */}
      <Title />
      {/* 02: INTRODUCTION */}
      <Introduction />
      {/* 03: MAGAZINE */}
      <Magazine />
      {/* 04: BPVIDEO */}
      <BpVideo />
      {/* 05: LOOKBOOK */}
      <Lookbook />
      {/* 06: MATCHING */}
      <Matching />
      {/* FOOTER */}
      <Footer />
      {/* <footer>
        <div className="inner">
          <div className="info">
            <div className="info__contact">
              <ul>
                <li>
                  <span className="material-icons">place</span>
                  <span>강남구 선릉로 433 세방빌딩 6층 (주)패션스케너</span>
                </li>
                <li>
                  <span className="material-icons">phone</span>
                  <span>02-5986-8861</span>
                </li>
                <li>
                  <span className="material-icons">email</span>
                  <span>support@fashionscanner.com</span>
                </li>
              </ul>
            </div>
            <div className="info__sns">
              <h3>GET TO KNOW US</h3>
              <FontAwesomeIcon icon={faFacebook} className="sns__icon" />
              <FontAwesomeIcon icon={faInstagram} className="sns__icon" />
              <FontAwesomeIcon icon={faTwitter} className="sns__icon" />
            </div>
          </div>
          <div className="copyright">
            <span className="material-icons">copyright</span>
            <span>Copyright Fashion Scanner. All Rights Reserved, 2021</span>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Home;
