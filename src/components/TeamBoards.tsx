import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {TeamBoardsBoardsFragment} from "../graphql/components";
import {Link} from "@reach/router";

const TeamBoardsInner = styled.div`
  
`

interface Props {
  boards: TeamBoardsBoardsFragment[]
}

const TeamBoards: FunctionComponent<Props> = ({boards}) => {

  return (
    <TeamBoardsInner>
      <div className="container">
        {
          boards.map(board =>
            <h2>
              <Link to={`board/${board.id}`}>{board.name}</Link>
            </h2>
          )
        }
      </div>
    </TeamBoardsInner>
  )
}

export default TeamBoards
