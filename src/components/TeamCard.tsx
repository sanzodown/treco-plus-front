import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {ViewerTeamsQueryTeams} from "../graphql/components";
import {Link} from "@reach/router";

interface Props {
  team: ViewerTeamsQueryTeams,
}

const TeamCardInner = styled.div`
`
const TeamCard: FunctionComponent<Props> = ({ team }) => {
    const { id, name, description} = team
    return (
        <TeamCardInner className="card" key={id}>
            <h2><Link to={`/team/${id}`}>{name}</Link></h2>
            <p>{description}</p>
        </TeamCardInner>
    )
}

export default TeamCard
