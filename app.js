const DUMMY_DATA = [
  {
    id: "d1",
    value: 10,
    region: "USA",
  },
  {
    id: "d2",
    value: 11,
    region: "GH",
  },
  {
    id: "d2",
    value: 12,
    region: "SK",
  },
  {
    id: "d2",
    value: 13,
    region: "CH",
  },
];

d3.select("div")
  .selectAll("p")
  .data(DUMMY_DATA)
  .enter()
  .append("p")
  .text((dta) => dta.id);
