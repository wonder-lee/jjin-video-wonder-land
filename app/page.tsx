"use client";
import { useState } from "react";
import styled from "styled-components";
import SearchInput from "./components/searchInput";
import FilterSelect from "./components/filterSelect";
import VideoCard from "./components/videoCard";
import VideoCardModal from "./components/videoCardModal";
import FilterDropdown from "./components/filterDropdown";
import ShareDrawer from "./components/shareDrawer";
import { FILTERS } from "./constants/filters";
import { RESPONSE_EXAMPLE } from "./constants/responseExample";

const Home = function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Style.MainContainer>
        <Style.VideoCardListArea>
          {RESPONSE_EXAMPLE.list.map((data, index) => (
            <VideoCard
              data={data}
              index={index}
              setIsModalOpen={setOpen}
              setSelectedCardIndex={setSelectedCardIndex}
            />
          ))}
        </Style.VideoCardListArea>
        <ShareDrawer open={open} setOpen={setOpen} />
      </Style.MainContainer>

      <Style.UserControllerContainer>
        <Style.UserControllerArea>
          {isModalOpen ? (
            <div>hello</div>
          ) : (
            <>
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
            </>
          )}
        </Style.UserControllerArea>
      </Style.UserControllerContainer>
    </>
  );
};

export default Home;

const Style = {
  MainContainer: styled.main`
    max-width: 375px;
    margin: 0 auto;
    padding: 15px 25px;
  `,
  VideoCardListArea: styled.div`
    margin-bottom: 200px;
  `,
  UserControllerContainer: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: white;
    bottom: 0px;
    width: calc(100vw - 20px);
  `,
  UserControllerArea: styled.div`
    max-width: 375px;
    padding: 25px 0px;
  `,
  FiltersArea: styled.div`
    /* overflow-x: scroll; */
    padding: 0px 20px;
  `,
  FiltersScroll: styled.div`
    min-width: 375px;
    display: flex;
  `,
};
