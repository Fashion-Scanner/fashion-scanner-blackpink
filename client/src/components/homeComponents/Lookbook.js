import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import 'components/homeComponents/css/Lookbook.css';
import ReactGA from 'react-ga';

const Lookbook = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const { t } = useTranslation('lookbook');

  return (
    <>
      <section className="lookbook" id="section__lookbook">
        <div className="lookbook__inner">
          <div className="lookbook__title">
            {!isMobile ? (
              <>
                <img src="/images/home/lookbook_logo.png" alt="BLACKPINK LOOKBOOK" />
              </>
            ) : (
              <>
                <img src="/images/home/m_lookbook_logo1.png" alt="BLACKPINK LOOKBOOK" />

                <img src="/images/home/m_lookbook_logo2.png" alt="BLACKPINK LOOKBOOK" />
              </>
            )}
            <span>{t('lookbook_title')}</span>
          </div>
          <div className="lookbook__members">
            {!isMobile ? (
              <>
                <a href="/blackpink/lookbook/jisoo" onClick={ReactGA.event({category: 'Home Jisoo Lookbook', action: 'Click'})}>
                  <img className="member" src="/images/home/jisoo_btn_photo.jpg" alt="JISOO" />
                </a>
                <a href="/blackpink/lookbook/jennie" onClick={ReactGA.event({category: 'Home Jennie Lookbook', action: 'Click'})}>
                  <img className="member" src="/images/home/jennie_btn_photo.jpg" alt="JENNIE" />
                </a>
                <a href="/blackpink/lookbook/lisa" onClick={ReactGA.event({category: 'Home Lisa Lookbook', action: 'Click'})}>
                  <img className="member" src="/images/home/lisa_btn_photo.jpg" alt="LISA" />
                </a>
                <a href="/blackpink/lookbook/rose" onClick={ReactGA.event({category: 'Home Rose Lookbook', action: 'Click'})}>
                  <img className="member" src="/images/home/rose_btn_photo.jpg" alt="ROSE" />
                </a>
              </>
            ) : (
              <div className="members__inner">
                <a href="/blackpink/lookbook/jisoo">
                  <img
                    className="member"
                    src="/images/lookbooks/lookbook_members_jisoo.png"
                    alt="JISOO"
                  />
                </a>
                <a href="/blackpink/lookbook/jennie">
                  <img
                    className="member"
                    src="/images/lookbooks/lookbook_members_jennie.png"
                    alt="JENNIE"
                  />
                </a>
                <a href="/blackpink/lookbook/lisa">
                  <img
                    className="member"
                    src="/images/lookbooks/lookbook_members_lisa.png"
                    alt="LISA"
                  />
                </a>
                <a href="/blackpink/lookbook/rose">
                  <img
                    className="member"
                    src="/images/lookbooks/lookbook_members_rose.png"
                    alt="ROSE"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookbook;
