export interface Launch {
  id: number;
  mission_name: string;
}

export interface LaunchListData {
  launches: Launch[];
}
export interface LaunchListVariables {
  offset: number;
  limit: number;
}
