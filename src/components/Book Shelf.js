import React from 'react'
import Book from './book'

class BookShelf extends React.Component {
state ={}

render(){
  const books = this.props.shelf.books;

  return(
   <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books && books.map(book => (
              <li key={book.id}>
                <Book  book ={book} />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
    </div>)
}
}

export default BookShelf
