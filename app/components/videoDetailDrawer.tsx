import React, { Dispatch } from "react";
import { isMobile } from "react-device-detect";
import { Button, Drawer } from "antd";
import styled from "styled-components";
import { shareKakao } from "../utils/shareKakao";

type PropsType = {
  // TODO videoData 응답값 확정되면 타입 설정 필요
  videoData: any;
  open: boolean;
  setOpen: Dispatch<boolean>;
};

const VideoDetailDrawer = ({ videoData, open, setOpen }: PropsType) => {
  const {
    title,
    videoId,
    channelName,
    channelThumbnail,
    point,
    publishedTime,
    subscribers,
    viewCount,
    thumbnails,
  } = videoData;

  const onClose = () => {
    vidoePause();
    setOpen(false);
  };

  const vidoePause = () => {
    const player = document.getElementById(videoId) as HTMLIFrameElement;
    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: [],
      }),
      "*"
    );
  };

  const onClickYoutubeLogo = () => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, "_blank");
  };

  const onClickKakaoLogo = () => {
    console.log("onClickKakaoLogo");
    const messageTitle = `🥳 "{searchKeyword}" 키워드의 찐영상 입니다. 🏆 찐영상 점수는 ${point} 입니다.`;
    const route = `https://www.youtube.com/watch?v=${videoId}`;
    const imageUrl = thumbnails[0]?.url;
    shareKakao(route, messageTitle, title, imageUrl);
  };

  return (
    <div>
      <Style.VideoDrawerContainer
        title={title}
        placement={isMobile ? "top" : "left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={videoId}
        footer={
          <Style.DrawerFooterContainer>
            <Button size="large" onClick={onClickYoutubeLogo}>
              <Style.FooterButtonArea>
                <img src="./youtube_logo.png" alt="kakaotalk_logo" />
                보러가기
              </Style.FooterButtonArea>
            </Button>
            <Button size="large" onClick={onClickKakaoLogo}>
              <Style.FooterButtonArea>
                <img src="./kakaotalk_logo.png" alt="kakaotalk_logo" />
                공유하기
              </Style.FooterButtonArea>
            </Button>
          </Style.DrawerFooterContainer>
        }
      >
        <iframe
          id={videoId}
          width="100%"
          height={isMobile ? "" : "50%"}
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"
          allowFullScreen
        />
        <Style.VideoDetailContentArea>
          <img src={channelThumbnail.url} alt="channelThumbnail" />
          <Style.VideoDetailTextArea>
            <b>{title}</b>
            <Style.VideoDescriptionText>
              {channelName}
            </Style.VideoDescriptionText>
            <Style.VideoDescriptionText>
              구독자 {subscribers}• 조회수 {viewCount} • {publishedTime}주 전
            </Style.VideoDescriptionText>
          </Style.VideoDetailTextArea>
        </Style.VideoDetailContentArea>
      </Style.VideoDrawerContainer>
    </div>
  );
};
export default VideoDetailDrawer;

const Style = {
  VideoDrawerContainer: styled(Drawer)`
    width: 40vw !important;
    @media only screen and (max-width: 600px) {
      width: unset !important;
    }
  `,

  VideoDetailContentArea: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 35px;
      width: 35px;
      border: 1px solid #5cdbd3;
      border-radius: 50px;
    }
  `,

  VideoDetailTextArea: styled.div``,

  VideoDescriptionText: styled.div`
    color: #8c8c8c;
    font-size: 12px;
  `,
  DrawerFooterContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  FooterButtonArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    img {
      width: 25px;
    }
  `,
};
