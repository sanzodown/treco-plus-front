import React, {FunctionComponent, Suspense} from 'react'
import styled from 'styled-components'
import Page from "../layouts/Page";
import ViewerTeams from "../components/ViewerTeams";

const TeamsInner = styled.div`
  
`

const Teams: FunctionComponent = () => {

  return (
    <Page>
      <TeamsInner>
        <h1>Teams</h1>
        <Suspense fallback={<div>loading</div>}>
          <ViewerTeams/>
        </Suspense>
      </TeamsInner>
    </Page>
  )
}

export default Teams
