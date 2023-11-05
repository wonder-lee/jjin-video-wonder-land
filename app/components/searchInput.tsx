import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const SearchInput = () => {
  return (
    <Style.SearchInputContainer
      placeholder="단어를 2개 이상 입력해주세요."
      enterButton
    />
  );
};

export default SearchInput;

const Style = {
  SearchInputContainer: styled(Search)`
    .ant-input,
    .ant-btn {
      height: 50px;
    }
  `,
};
