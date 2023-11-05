import React, { ReactNode } from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

type PropsType = {
  items: MenuProps["items"];
  name: string;
};

const FilterDropdown = ({ items, name }: PropsType) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomLeft">
      <Button>bottomLeft</Button>
    </Dropdown>
  );
};

export default FilterDropdown;
