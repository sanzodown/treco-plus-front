import React, {FunctionComponent, Suspense} from 'react'
import styled from 'styled-components'
import {useTeamQuery} from "../graphql/components";
import TeamBoards from "../components/TeamBoards";
import {RouteComponentProps} from "@reach/router";
import Page from "../layouts/Page";

const TeamInner = styled.div`
  
`

interface Props extends RouteComponentProps<{teamId: string}>{

}

const Team: FunctionComponent<Props> = ({teamId}) => {
  const { data } = useTeamQuery({suspend: true, variables: {id: teamId!}})
  return (
    <Page>
      <TeamInner>
        <Suspense fallback={<div>loading</div>}>
          <TeamBoards boards={data!.node!.boards} />
        </Suspense>
      </TeamInner>
    </Page>
  )
}

export default Team
