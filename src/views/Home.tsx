import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import Page from "../layouts/Page";

const HomeInner = styled.div`
  
`

const Home: FunctionComponent = () => {
  return (
    <Page>
      <HomeInner>
        <h1>Je suis la home</h1>
      </HomeInner>
    </Page>
  )
}

export default Home
