import React from "react";
import { Select } from "antd";
import styled from "styled-components";

type PropsType = {
  options: { value: string; label: string; disabled?: boolean }[];
};

const FilterSelect = ({ options }: PropsType) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Style.FilterSelectContainer
      defaultValue={options[0].value}
      onChange={handleChange}
      options={options}
    />
  );
};

export default FilterSelect;

const Style = {
  FilterSelectContainer: styled(Select)`
    width: 90px;
    .ant-select-selection-item {
      font-size: 10px;
    }
    .ant-select-arrow {
      display: none;
    }
  `,
};
