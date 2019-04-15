import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {useBoardQuery} from "../graphql/components";
import {RouteComponentProps} from "@reach/router";
import Page from "../layouts/Page";
import CategoryTicket from "./CategoryTicket";

const BoardInner = styled.div`
  ol {
    padding: 0;
    display: flex;
    align-items: baseline;
  }
  .category {
    width: 200px;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  
`

interface Props extends RouteComponentProps<{ boardId: string }> {

}

const Board: FunctionComponent<Props> = ({boardId}) => {
  const {data} = useBoardQuery({suspend: true, variables: {id: boardId!}})
  return (
    <Page>
      <BoardInner>
        <div className="container">
          <ol>
            {
              data!.node!.categories
                .sort((a,b) => a.position < b.position ? -1 : 1)
                .map(category =>
                  <li className="card category" key={category.id}>
                    <div className="card-header">
                      {category.name}
                    </div>
                    {
                     category!.tickets!
                       .sort((a,b) => a.position < b.position ? -1 : 1)
                       .map(ticket =>
                       <CategoryTicket ticket={ticket} />
                     )
                    }
                  </li>
              )
            }
          </ol>
        </div>
      </BoardInner>
    </Page>
  )
}

export default Board
