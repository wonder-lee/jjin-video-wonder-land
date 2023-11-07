import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const AnimationTitle = () => {
  return (
    <>
      <Style.LeftDescription>
        가장 심플한 유튜브 영상 분석
      </Style.LeftDescription>
      <Style.LeftTitle>찐영상</Style.LeftTitle>
      <Style.LeftSubTitle>
        <TypeAnimation
          sequence={[
            "키워드를 검색하면 🧐",
            1000,
            "가치있는 샘플 영상을 찾아드립니다 🥳",
            1000,
            "지금 바로 검색해보세요 🔎",
            1000,
          ]}
          speed={50}
        />
      </Style.LeftSubTitle>
    </>
  );
};

export default AnimationTitle;

const Style = {
  LeftSubTitle: styled.h2`
    font-size: 18px;
    line-height: 26px;
  `,
  LeftTitle: styled.h1`
    font-weight: 700;
    font-size: 45px;
    line-height: 52px;
    letter-spacing: 2px;
    color: #5cdbd3;
    margin: unset;
  `,
  LeftDescription: styled.p`
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 2px;
    margin-bottom: 8px;
  `,
};
