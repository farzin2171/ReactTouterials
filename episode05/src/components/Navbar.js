import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BookContext } from '../contexts/BookContext';

function Navbar(){
  const {books}=useContext(BookContext);

  console.log(books);

  return(
      <div className="navbar">
          <h1>Farzin Reading List</h1>
          <p>currently you have {books.length}  books to get through</p>
      </div>
  )
}

export default Navbar;

