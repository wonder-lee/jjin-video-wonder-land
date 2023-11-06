import { Dispatch } from "react";
import { Card, Tag } from "antd";
import styled from "styled-components";
import { StarTwoTone } from "@ant-design/icons";

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
  const {
    title,
    thumbnails,
    subscribers,
    viewCount,
    publishedTime,
    point,
    channelName,
    channelThumbnail,
  } = data;

  const onClickCard = () => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };
  return (
    <Style.CardContainer
      cover={<img alt={`${title}_thumbnail`} src={thumbnails[0]["url"]} />}
      onClick={onClickCard}
      bordered={false}
    >
      <Style.CardPointArea>
        <Tag bordered={false} color="cyan">
          <StarTwoTone twoToneColor="#5cdbd3" /> <span>{point}</span>
        </Tag>
      </Style.CardPointArea>
      <Style.CardContentArea>
        <img src={channelThumbnail.url} />
        <div>
          <b>{title}</b>
          <div>{channelName}</div>
          <Style.CardDescriptionArea>
            구독자 {subscribers}• 조회수 {viewCount} • {publishedTime}주 전
          </Style.CardDescriptionArea>
        </div>
      </Style.CardContentArea>
    </Style.CardContainer>
  );
};

export default VideoCard;

const Style = {
  CardContainer: styled(Card)`
    position: relative;
    cursor: pointer;
    max-width: 420px;
    margin: 80px auto;
    box-shadow: unset !important;
    .ant-card-body {
      padding: unset !important;
    }
  `,
  CardContentArea: styled.div`
    padding-top: 15px;
    display: flex;
    gap: 10px;

    img {
      height: 35px;
      width: 35px;
      border: 1px solid #5cdbd3;
      border-radius: 50px;
    }
  `,
  CardDescriptionArea: styled.div`
    color: #8c8c8c;
  `,
  CardPointArea: styled.div`
    /* width: 100px; */
    position: absolute;
    top: 10px;
    right: 0px;
    color: #5cdbd3;
  `,
};
