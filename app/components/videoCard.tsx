import { Dispatch } from "react";
import Image from "next/image";
import { Tag } from "antd";
import styled from "styled-components";

type PropsType = {
  data?: any;
  index: number;
  setOpen: Dispatch<boolean>;
  setSelectedCardIndex: Dispatch<number>;
};
const VideoCard = ({
  data,
  index,
  setOpen,
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
    setOpen(true);
  };
  return (
    <Style.CardContainer onClick={onClickCard}>
      <Style.VideoArea>
        <Image
          src={thumbnails[0]["url"]}
          alt={`${title}_thumbnail`}
          width={160}
          height={100}
        />
        <p>{title.length > 15 ? title.substring(0, 13) + "..." : title}</p>
      </Style.VideoArea>
      <Style.DataArea>
        <Tag color={index === 0 ? "red" : "cyan"}>
          <span>
            {index + 1}위 / {point} 점
          </span>
        </Tag>
        <div>{subscribers}명</div>
        <div>{viewCount}회</div>
        <div>{publishedTime}주</div>
      </Style.DataArea>
    </Style.CardContainer>
  );
};

export default VideoCard;

const Style = {
  CardContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: #e6fffb;
    }
  `,
  VideoArea: styled.div`
    img {
      /* width: 60%; */
      border-radius: 5px;
    }

    p {
      margin: unset;
      font-size: 10px;
      font-weight: 600;
      color: #8c8c8c;
    }
  `,
  DataArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    text-align: right;
    .ant-tag {
      margin: unset;
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
    position: absolute;
    top: 10px;
    right: 0px;
    color: #5cdbd3;
  `,
  CardRankArea: styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #5cdbd3;
  `,
};
