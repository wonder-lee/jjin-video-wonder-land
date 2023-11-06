import { Dispatch } from "react";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

type PropsType = {
  data: any;
  index: number;
  setIsModalOpen: Dispatch<boolean>;
  setSelectedCardIndex: Dispatch<number>;
};
const VideoCard = ({
  data,
  index,
  setIsModalOpen,
  setSelectedCardIndex,
}: PropsType) => {
  const { title, thumbnails, subscribers, viewCount, publishedTime, point } =
    data;

  const onClickCard = () => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };
  return (
    <Style.CardContainer
      cover={<img alt={`${title}_thumbnail`} src={thumbnails[0]["url"]} />}
      onClick={onClickCard}
    >
      <Meta title={title} />
      <span>{`점수 : ${point} 점`}</span>
      <span>{`구독자 : ${subscribers}명`}</span>
      <span>{`조회수 : ${viewCount}명`}</span>
      <span>{`기간 : ${publishedTime}주`}</span>
    </Style.CardContainer>
  );
};

export default VideoCard;

const Style = {
  CardContainer: styled(Card)`
    cursor: pointer;
    max-width: 420px;
    margin: 25px auto;
    .ant-card-meta-title {
      margin-bottom: 10px;
    }
    .ant-card-body {
      span {
        display: block;
      }
    }
  `,
};
