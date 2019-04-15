import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {CategoryTicketTicketFragment} from "../graphql/components";

const CategoryTicketInner = styled.div`
  
`
interface Props {
  ticket: CategoryTicketTicketFragment
}

const CategoryTicket: FunctionComponent<Props> = ({ticket}) => {

    return (
        <CategoryTicketInner>
          <div>
            {ticket.name}
          </div>
          <div>
            {ticket.content}
          </div>
        </CategoryTicketInner>
    )
}

export default CategoryTicket
