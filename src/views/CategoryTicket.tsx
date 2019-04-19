import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Draggable} from "react-beautiful-dnd";
import {CategoryTicketTicketFragment} from "../graphql/components";

const CategoryTicketInner = styled.div`
  border: 1px solid #e14eca;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  .ticket-title {
    color: #e14eca;
    font-style: italic;
    margin-bottom: 5px;
  }
`
interface Props {
  ticket: CategoryTicketTicketFragment,
  index: number
}

const CategoryTicket: FunctionComponent<Props> = ({ticket, index}) => {

    return (
      <Draggable draggableId={ticket.id} index={index}>
        {(provided) => (
          <CategoryTicketInner
            ref={provided.innerRef}
            {... provided.draggableProps}
            {... provided.dragHandleProps}
          >
            <div className="ticket-title">
              {ticket.name}
            </div>
            <div>
              {ticket.content}
            </div>
          </CategoryTicketInner>
        )}
      </Draggable>
    )
}

export default CategoryTicket
