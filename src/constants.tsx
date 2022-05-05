type constantsType = {
  readonly querySize: number;
  readonly API_URL: string;
  readonly fetchBuffer: number;
};
const constants: constantsType = {
  querySize: 10,
  API_URL: "https://api.spacex.land/graphql/",
  fetchBuffer: 4,
};

export default constants;
