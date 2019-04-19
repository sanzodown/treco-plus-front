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
        <div className="row">
          {
            boards.map(board =>
              <div className="card col-lg-4">
                <h2>
                  <Link to={`board/${board.id}`}>
                    {board.name}
                  </Link>
                </h2>
              </div>
            )
          }
        </div>
      </div>
    </TeamBoardsInner>
  )
}

export default TeamBoards
