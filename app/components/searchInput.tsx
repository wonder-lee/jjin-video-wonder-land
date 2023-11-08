import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

const SearchInput = () => {
  return (
    <Style.SearchInputContainer
      placeholder="키워드를 2개 이상 입력해주세요."
      enterButton
    />
  );
};

export default SearchInput;

const Style = {
  SearchInputContainer: styled(Search)`
    padding: 10px 10px 0px 10px;

    input {
      height: 45px;
      border-radius: 50px;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }
    .ant-btn {
      border-top-right-radius: 50px !important;
      border-bottom-right-radius: 50px !important;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px !important;
    }

    .ant-input,
    .ant-btn {
      height: 50px;
    }
  `,
};
