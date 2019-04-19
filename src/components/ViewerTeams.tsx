import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useViewerTeamsQuery} from "../graphql/components";
import TeamCard from "./TeamCard";

const ViewerTeamsInner = styled.div`
  
`

const ViewerTeams: FunctionComponent = () => {
  const {data} = useViewerTeamsQuery({suspend: true})

  return (
    <ViewerTeamsInner>
      <div className="container team-card">
        {data && data.viewer && data.viewer.teams!.map(team =>
          <TeamCard key={team!.id} team={team!}/>
        )}
      </div>
    </ViewerTeamsInner>
  )
}

export default ViewerTeams
