const FILTERS = [
  [
    { value: "kor", label: "한국" },
    { value: "us", label: "미국", disabled: true },
  ],
  [
    { value: "20", label: "20분 미만" },
    { value: "00", label: "20분 초과" },
  ],
  [
    { value: "6", label: "6개월간" },
    { value: "12", label: "1년간" },
  ],
  [
    { value: "500", label: "5백 회 이상" },
    { value: "5000", label: "5천 회 이상" },
    { value: "10000", label: "1만 회 이상" },
    { value: "50000", label: "5만 회 이상" },
    { value: "100000", label: "10만 회 이상" },
    { value: "200000", label: "20만 회 이상" },
    { value: "500000", label: "50만 회 이상" },
  ],
];

export { FILTERS };
