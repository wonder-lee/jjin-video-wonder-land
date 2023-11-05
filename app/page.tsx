"use client";
import { useState } from "react";
import styled from "styled-components";
import SearchInput from "./components/searchInput";
import FilterSelect from "./components/filterSelect";
import VideoCard from "./components/videoCard";
import VideoCardModal from "./components/videoCardModal";
import { FILTERS } from "./constants/filters";
import { RESPONSE_EXAMPLE } from "./constants/responseExample";

const Home = function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Style.MainContainer>
        <Style.VideoCardListContainer>
          {RESPONSE_EXAMPLE.list.map((data, index) => (
            <VideoCard
              data={data}
              index={index}
              setIsModalOpen={setIsModalOpen}
              setSelectedCardIndex={setSelectedCardIndex}
            />
          ))}
        </Style.VideoCardListContainer>
        <Style.FiltersContainer>
          {FILTERS.map((FILTER) => (
            <FilterSelect options={FILTER} />
          ))}
        </Style.FiltersContainer>
        <SearchInput />
        <VideoCardModal
          data={RESPONSE_EXAMPLE.list[selectedCardIndex]}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Style.MainContainer>
    </>
  );
};

export default Home;

const Style = {
  MainContainer: styled.main`
    max-width: 375px;
    margin: 0 auto;
    padding: 0 24px 14px;
  `,
  FiltersContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    max-width: 420px;
    margin: 15px 0px;
  `,
  VideoCardListContainer: styled.div`
    overflow-y: scroll;
    height: calc(100vh - 250px);
    padding: 0px 35px;
  `,
};
