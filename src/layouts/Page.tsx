import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import AppHeader from "../components/AppHeader";

const PageInner = styled.div`
  
`

const Page: FunctionComponent = ({children}) => {

  return (
    <PageInner>
      <nav>
        <AppHeader/>
      </nav>
      <main>
        {children}
      </main>
    </PageInner>
  )
}

export default Page
