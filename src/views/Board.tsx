import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {DragDropContext, Droppable, DroppableProvided, OnDragEndResponder} from 'react-beautiful-dnd'
import {useBoardQuery} from "../graphql/components";
import {RouteComponentProps} from "@reach/router";
import Page from "../layouts/Page";
import CategoryTicket from "./CategoryTicket";

const BoardInner = styled.div`
  margin-top: 50px;
  ol {
    padding: 0;
    display: flex;
    align-items: baseline;
  }
  .category {
    width: 200px;
    padding: 8px; 
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  .category-title {
    text-align: center;
    width: 100%;
    background-color: #e14eca !important;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px; 
  } 
`

interface Props extends RouteComponentProps<{ boardId: string }> {

}

const Board: FunctionComponent<Props> = ({boardId}) => {
  const {data} = useBoardQuery({suspend: true, variables: {id: boardId!}})

  const onDragEnd: OnDragEndResponder = result => {

  }

  return (
    <Page>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardInner>
          <div className="container">
            <ol>
              {
                data!.node!.categories
                  .sort((a,b) => a.position < b.position ? -1 : 1)
                  .map(category =>
                    <Droppable droppableId={category.id}>
                      {(provided: DroppableProvided) => (
                          <li
                            className="card category"
                            key={category.id}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <div className="card-header category-title">
                              {category.name}
                            </div>
                            {
                              category!.tickets!
                                .sort((a,b) => a.position < b.position ? -1 : 1)
                                .map((ticket, index) =>
                                  <CategoryTicket ticket={ticket} index={index}/>
                                )
                            }
                            {provided.placeholder}
                          </li>
                      )}
                    </Droppable>
                )
              }
            </ol>
          </div>
        </BoardInner>
      </DragDropContext>
    </Page>
  )
}

export default Board
