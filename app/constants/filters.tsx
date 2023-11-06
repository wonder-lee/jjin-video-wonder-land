import {
  CalendarOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const FILTERS = [
  {
    name: "조회수",
    icon: <EyeOutlined />,
    items: [
      { key: "500", label: "5백 회 이상" },
      { key: "5000", label: "5천 회 이상" },
      { key: "10000", label: "1만 회 이상" },
      { key: "50000", label: "5만 회 이상" },
      { key: "100000", label: "10만 회 이상" },
      { key: "200000", label: "20만 회 이상" },
      { key: "500000", label: "50만 회 이상" },
    ],
  },
  {
    name: "기간",
    icon: <CalendarOutlined />,
    items: [
      { key: "1", label: "1개월간" },
      { key: "3", label: "3개월간" },
      { key: "6", label: "6개월간" },
      { key: "12", label: "1년간" },
    ],
  },
  {
    name: "길이",
    icon: <FieldTimeOutlined />,
    items: [
      { key: "20", label: "20분 미만" },
      { key: "00", label: "20분 초과" },
    ],
  },
  {
    name: "국가",
    icon: <GlobalOutlined />,
    items: [
      { key: "kor", label: "한국" },
      { key: "us", label: "미국", disabled: true },
    ],
  },
];

export { FILTERS };
