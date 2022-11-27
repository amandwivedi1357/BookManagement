import React from 'react'

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='BookCover' width= "100%" />
      </div>
      <div>{bookData.book_name}</div>
      <div>{bookData.category}</div>
      <div>{bookData.release_year}</div>
    </div>
  )
}

export default BookCard
