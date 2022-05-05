import { useParams } from "react-router";

function LaunchDetails() {
  const id = useParams().id;

  if (isNaN(Number(id))) {
    return <div>Invalid ID</div>;
  }

  return <div>LaunchDetails o id {id}</div>;
}

export default LaunchDetails;
