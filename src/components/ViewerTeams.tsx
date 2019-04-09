import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useViewerTeamsQuery} from "../graphql/components";

const ViewerTeamsInner = styled.div`
  
`

const ViewerTeams: FunctionComponent = () => {
  const {data} = useViewerTeamsQuery({suspend: true})

  return (
    <ViewerTeamsInner>
      <div className="container">
        {data && data.viewer && data.viewer.teams!.map(team =>
          <div className="card" key={team!.id}>
            <h2>{team!.name}</h2>
            <p>{team!.description}</p>
          </div>
        )}

      </div>
    </ViewerTeamsInner>
  )
}

export default ViewerTeams
