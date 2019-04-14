import React, {FunctionComponent, Suspense} from 'react'
import styled from 'styled-components'
import Page from "../layouts/Page";
import TeamBoards from "../components/TeamBoards";
import {RouteComponentProps } from "@reach/router";

interface TeamIdParameterProp extends RouteComponentProps{
  teamId?: string
}
const BoardsInner = styled.div`
  
`

const Boards: FunctionComponent<TeamIdParameterProp> = ({teamId}) => {
  return (
    <Page>
      <BoardsInner>
        <h1>Boards</h1>
        <Suspense fallback={<div>loading</div>}>
          <TeamBoards teamId={teamId ? teamId : ''}/>
        </Suspense>
      </BoardsInner>
    </Page>
  )
}

export default Boards
