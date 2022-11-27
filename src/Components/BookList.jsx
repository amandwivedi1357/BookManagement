import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../Redux/AppData/action';
import BookCard from './BookCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const BookList = () => {
     const location = useLocation();
    const books = useSelector((store)=>store.appReducer.books)
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    useEffect(()=>{
         if(location||books.length===0)
         {  const sortBy = searchParams.get('sort')
            const getBooksParams = {
              params:{
                category:searchParams.getAll('category'),
                _sort:sortBy && 'release_year',
                _order:sortBy,

              }
            }
            dispatch(getBooks(getBooksParams))

         }
    },[books.length,dispatch,location.search])
  return (
    <>
     
      {
        books.length>0 && books.map((SingleBook=>{
             return<BookCardWrap key={SingleBook}> <BookCard bookData = {SingleBook}/></BookCardWrap>
        }))
      }

    </>
  )
}


const BookCardWrap = styled.div`
width:300px
`
export default BookList
