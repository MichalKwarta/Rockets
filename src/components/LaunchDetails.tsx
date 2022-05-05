import { useParams } from 'react-router'

function LaunchDetails() {
const id = useParams().id
  return (
      <div>LaunchDetails o numerku { id}</div>
  )
}

export default LaunchDetails