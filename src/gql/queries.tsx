import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
    query Launches($limit:Int, $offset:Int) {
        launches(limit: $limit, offset: $offset) {
            id
            mission_name
        }
    }
`;