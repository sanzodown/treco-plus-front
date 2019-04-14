import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {ViewerTeamsQueryTeams} from "../graphql/components";

interface Props {
  team: ViewerTeamsQueryTeams
}

const TeamCardInner = styled.div`
  
`
const TeamCard: FunctionComponent<Props> = ({ team }) => {
  const { id, name, description} = team
  return (
    <TeamCardInner>
      <div className="card" key={id}>
        <h2><a href={`/team/${id}/boards`}>{name}</a></h2>
        <p>{description}</p>
      </div>
    </TeamCardInner>
  )
}

export default TeamCard
