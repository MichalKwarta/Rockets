import { useQuery } from "@apollo/client";
import { LaunchListData, LaunchListVariables } from "../gql/queriesTypes";
import { GET_LAUNCHES } from "../gql/queries";
import constants from "../constants";
import LaunchItem from "./LaunchItem";
import { InView } from "react-intersection-observer";
import SearchBar from "./SearchBar";
import React from "react";

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
  if (error) return <div>Something went wrong</div>;
  if (loading)
    return (
      <div className="ListLaunches">
        <SearchBar />

        <span>loading...</span>
      </div>
    );
  if (!data) return <div>No data</div>;

  return (
    <>
      <SearchBar />

      <ul className="ListLaunches">
        {data.launches.map((launch, idx) => {
          return (
            <React.Fragment key={`observerFragment${idx}`}>
              <LaunchItem key={launch.id.toString()} id={launch.id}>
                {launch.mission_name}
              </LaunchItem>

              {idx === data.launches.length - constants.fetchBuffer && (
                <InView
                  key={`observer${idx}`}
                  triggerOnce={true}
                  initialInView={false}
                  onChange={(inView: boolean) => {
                    if (inView) {
                      fetchMore({
                        variables: {
                          offset: data.launches.length,
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
                      }).catch(
                        (err) => console.log("Error fetching more launches: ", err)
                        //Teoretycznie nie było wyspecyfikowane jak to handlować
                      );
                    }
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
export default ListLaunches;
