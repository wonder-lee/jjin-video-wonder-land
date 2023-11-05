import { Dispatch } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { YoutubeOutlined } from "@ant-design/icons";

type PropsType = {
  data: any;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<boolean>;
};

const VideoCardModal = ({ data, isModalOpen, setIsModalOpen }: PropsType) => {
  const { title, thumbnails, subscribers, viewCount, publishedTime, point } =
    data;

  console.log("data", data);

  return (
    <>
      <Style.ModalContainer
        title={title}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        closeIcon={false}
        centered={true}
      >
        <Style.ThumbnailImg
          alt={`${title}_thumbnail`}
          src={thumbnails[0]["url"]}
        />
        <div>
          <div>{`점수 : ${point} 점`}</div>
          <div>{`구독자 : ${subscribers}명`}</div>
          <div>{`조회수 : ${viewCount}명`}</div>
          <div>{`기간 : ${publishedTime}주`}</div>
        </div>
        <Style.BrandLogoDiv>
          <div>
            <img src="youtube_logo_04.png" />
            <span>채널 보기</span>
          </div>
          <div>
            <img src="kakaotalk_logo.png" />
            <span>카톡 저장</span>
          </div>
        </Style.BrandLogoDiv>
      </Style.ModalContainer>
    </>
  );
};

export default VideoCardModal;

const Style = {
  ModalContainer: styled(Modal)`
    max-width: 355px;
    .ant-modal-body {
      text-align: center;
    }
  `,

  ThumbnailImg: styled.img`
    max-width: 305px;
    width: calc(100vw - 100px);
  `,

  BrandLogoDiv: styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-around;
    div {
      margin: 0 auto;
      img {
        display: block;
        height: 50px;
      }
    }
  `,
};
