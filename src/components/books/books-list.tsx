import {memo, useEffect, useState} from 'react';
import axios from 'axios';
import BookCard from './book-card';
import { useLocation } from 'react-router-dom';

 export interface IbookItem  {
  id:number,
  title: string,
  price:number
}

 function BooksList() {
 
  const [data, setData] = useState<IbookItem[]>([])
  const {state} = useLocation()git 
  useEffect(() => {

    if(state) console.log(state)

    ;(async () => {
      try {
        const response = await axios.get('http://localhost:3000/books')
        setData(response.data)
      } catch (error) {
        console.log(error);
        
      }
     
    })()
  }, [])

  return data ? (
    <>
      <div>Books-list</div>
        {data.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
    
    </>
  ) : (
    <h1>loading...</h1>
  )
}

export default memo(BooksList)