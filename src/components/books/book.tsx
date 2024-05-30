import axios from 'axios';
import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IbookItem } from './books-list';
import styled from 'styled-components';

interface bookProps {}
type iParams = {
    id:string | undefined
}
const  Container = styled.div`
    background-color: wheat;
    border-radius: 5px;
    padding: 16px;
`
const Header = styled.header`
    display: flex;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 1.3rem;
    margin: 0;
`
const Price = styled.p`
    color: #a12b27;
    font-weight: 700;
    font-size: 1rem;
`
const Book: FC<bookProps> = ({}) => {
    const {id} = useParams<iParams>()
    const [book, setBook]= useState<IbookItem | null>(null)
    const navigate = useNavigate()
   useEffect(()=>{
    (
        async ()=>{
           try {
            const response = await axios.get(`http://localhost:3000/books/${id}`)
            setBook(response.data);
           } catch (error) {
               console.warn(error)
               navigate("/" , {
                state:{id}
               })
           }
            
        }
    )()
   },[id])
        return book ? (
            <Container>
                <Header>
                <div>
                 <Title> {book.title}</Title>
                 <Price>{book.price}$</Price>
                </div>
                </Header>
            </Container>     
        ) : (
            <h2>loading ...</h2>
        )
}
export default Book;