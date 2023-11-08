"use client";
import { useState } from "react";
import { List } from "antd";
import styled from "styled-components";
import AnimationTitle from "./components/animationTitle";
import SearchInput from "./components/searchInput";
import VideoCard from "./components/videoCard";
import FilterDropdown from "./components/filterDropdown";
import VideoDetailDrawer from "./components/videoDetailDrawer";
import { FILTERS } from "./constants/filters";
import { RESPONSE_EXAMPLE } from "./constants/responseExample";

const Home = function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <Style.MainContainer>
      <Style.LeftArea>
        <AnimationTitle />
      </Style.LeftArea>
      <Style.RightArea>
        <Style.ContentContainer>
          <Style.VideoCardListArea>
            <List
              dataSource={RESPONSE_EXAMPLE.list}
              renderItem={(data, index) => (
                <List.Item>
                  <VideoCard
                    data={data}
                    index={index}
                    setOpen={setOpen}
                    setSelectedCardIndex={setSelectedCardIndex}
                  />
                </List.Item>
              )}
            />
          </Style.VideoCardListArea>
          <VideoDetailDrawer
            videoData={RESPONSE_EXAMPLE.list[selectedCardIndex]}
            open={open}
            setOpen={setOpen}
          />
        </Style.ContentContainer>
        <Style.UserControllerContainer>
          <Style.UserControllerArea>
            <Style.FiltersArea>
              <Style.FiltersScroll>
                {FILTERS.map((FILTER) => {
                  const { items, icon, name } = FILTER;
                  return (
                    <FilterDropdown items={items} icon={icon} name={name} />
                  );
                })}
              </Style.FiltersScroll>
            </Style.FiltersArea>
            <SearchInput />
          </Style.UserControllerArea>
        </Style.UserControllerContainer>
      </Style.RightArea>
    </Style.MainContainer>
  );
};

export default Home;

const Style = {
  MainContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 90px;
    @media only screen and (max-width: 600px) {
      margin-top: unset;
    }
  `,
  LeftArea: styled.div`
    padding-top: 25vh;
    width: 350px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `,
  RightArea: styled.div``,
  ContentContainer: styled.div`
    max-width: 375px;
    margin: 0 auto;
    padding: 15px 25px;
    max-height: 680px;
    height: calc(100vh - 410px);
    overflow-y: scroll;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media only screen and (max-width: 600px) {
      height: calc(100vh - 265px);
      box-shadow: unset;
    }
  `,
  VideoCardListArea: styled.div`
    .ant-list-item {
      border-block-end: unset !important;
      padding: unset !important;
    }
  `,

  UserControllerContainer: styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 0 auto;
    padding: 10px 25px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media only screen and (max-width: 600px) {
      padding: unset;
      box-shadow: unset;
    }
  `,
  UserControllerArea: styled.div``,
  FiltersArea: styled.div`
    @media only screen and (max-width: 600px) {
      padding-top: 25px;
    }
  `,
  FiltersScroll: styled.div`
    display: flex;
  `,
};
