import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useTeamBoardsQuery} from "../graphql/components";

const TeamBoardsInner = styled.div`
  
`
interface Props {
  teamId: string
}

const TeamBoards: FunctionComponent<Props> = ({teamId}) => {
  const {data} = useTeamBoardsQuery({suspend: true, variables: { input: teamId }})

  return (
    <TeamBoardsInner>
      <div className="container">
        {data && data.teamBoards && (
          data.teamBoards.map(board =>
            <h2>{board ? board.name : ''}</h2>
          )
        )
        }
      </div>
    </TeamBoardsInner>
  )
}

export default TeamBoards
