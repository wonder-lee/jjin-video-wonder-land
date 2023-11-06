import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import styled from "styled-components";

type PropsType = {
  items: MenuProps["items"];
  icon: any;
  name: string;
};

const FilterDropdown = ({ items, icon, name }: PropsType) => {
  return (
    <Style.FilterDropdownContainer menu={{ items }} trigger={["click"]}>
      <Button>
        <div>{icon}</div>
        <div>{name}</div>
      </Button>
    </Style.FilterDropdownContainer>
  );
};

export default FilterDropdown;

const Style = {
  FilterDropdownContainer: styled(Dropdown)`
    width: 85px;
    height: auto;
    border-color: white;
    box-shadow: unset;
    font-size: 12px;
    color: #8c8c8c;

    svg {
      font-size: 20px;
    }
  `,
};
