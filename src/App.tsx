import React, { FunctionComponent } from "react"
import styled from "styled-components"
import LoginForm from "./components/LoginForm";
import {useViewerQuery} from "./graphql/components";

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  const {data, error, loading} = useViewerQuery()
  console.log(data, error)
  return (
    <AppInner>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <LoginForm/>
      </main>
    </AppInner>
  );
}

export default App
