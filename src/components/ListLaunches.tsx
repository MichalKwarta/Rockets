import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../gql/queries";
import constants from "../constants";
import LaunchItem from "./LaunchItem";
import { InView } from "react-intersection-observer";
import SearchBar from "./SearchBar";
import React from "react";

interface LaunchList {
  id: number;
  mission_name: string;
}

interface LaunchListData {
  launches: LaunchList[];
}
interface LaunchListVariables {
  offset: number;
  limit: number;
}

function ListLaunches() {
  const { loading, error, data, fetchMore } = useQuery<
    LaunchListData,
    LaunchListVariables
  >(GET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: constants.querySize,
    },
  });
  if (error) return <div>Error</div>;
  if (loading || !data)
    return (
      <div className="ListLaunches">
        <SearchBar />

        <span>loading...</span>
      </div>
    );

  return (
    <>
      <SearchBar />

      <ul className="ListLaunches">
        {data.launches.map((launch, idx) => {
          return idx === data.launches.length - constants.fetchBuffer ? (
            <React.Fragment key={ `observerFragment${idx}`}>
              <InView
                key={`observer${idx}`}
                triggerOnce={true}
                initialInView={false}
                onChange={(inView: boolean) => {
                  if (inView) {
                    fetchMore({
                      variables: {
                        offset: data.launches.length + 1,
                        limit: constants.querySize,
                      },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        return {
                          ...previousResult,
                          // Add the new matches data to the end of the old matches data.
                          launches: [
                            ...previousResult.launches,
                            ...fetchMoreResult.launches,
                          ],
                        };
                      },
                    });
                  }
                }}
              >

              </InView>
              <LaunchItem key={ launch.id.toString() } id={launch.id}>{launch.mission_name}</LaunchItem>
            </React.Fragment>
          ) : (
            <LaunchItem  key={ launch.id.toString()} id={launch.id}>
              {launch.mission_name}
            </LaunchItem>
          );
        })}
      </ul>
    </>
  );
}
export default ListLaunches;
