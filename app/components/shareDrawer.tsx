import React, { Dispatch, useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";

type PropsType = {
  open: boolean;
  setOpen: Dispatch<boolean>;
};

const ShareDrawer = ({ open, setOpen }: PropsType) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default ShareDrawer;
