import React from 'react';
import 'components/homeComponents/css/MemberMatching.css';

const MemberMatching = () => {
  return (
    <>
      <section className="memberMatching" id="section__memberMatching">
        <div className="memberMatching__inner">
          <div className="memberMatching__contents">
            <div className="contents__title">
              <img src={require('images/matching_logo1.png').default} alt="WHICH MEMBER" />
              <img src={require('images/matching_logo2.png').default} alt="ARE YOU?" />
            </div>
            <div className="contents__dsc">
              <p>
                본인의 평소 입는 스타일의 옷을 업로드해보세요.
                <br />
                AI가 어떤 멤버와 패션 성향이 가장 비슷한지 알려드립니다.
              </p>
            </div>
            <div className="contents__btn">
              <a href="/matching">바로가기</a>
            </div>
          </div>
          <div className="memberMatching__img">
            <img src={require('images/group_photo.png').default} alt="GROUP Photo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberMatching;
