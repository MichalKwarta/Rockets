type constantsType = {
  readonly querySize: number;
  readonly API_URL: string;
};
const constants: constantsType = {
  querySize: 10,
  API_URL: "https://api.spacex.land/graphql/",
};

export default constants;