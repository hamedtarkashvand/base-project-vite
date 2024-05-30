import {memo, type FC} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {IbookItem} from './books-list'

interface bookCardProps {
  book: IbookItem
}

const StyleLink = styled(Link)`
  width: 90%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 8px;
  transition:
    transform 0.1s ease-in-out,
    background 0.1s ease-in-out;
  text-decoration: none;
  border: 1px solid gray;
  color: black;
  cursor: pointer;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1);
  }
`
const Title = styled.h2`
  font-size: 1.3rem;
`
const Price = styled.p`
  font-size: 1rem;
  text-align: left;
`

const BookCard: FC<bookCardProps> = ({book}) => {
  return (
    <StyleLink to={`/${book.id}`}>
      <span className="rounded-full w-16 h-16  border border-black mr-3 bg-green-300"></span>
      <div>
        <Title>{book.title}</Title>
        <Price>{book.price}$</Price>
      </div>
    </StyleLink>
  )
}
export default memo(BookCard, (pProps, nProps) => {
  return Object.is(pProps, nProps)
})
