import React, { Component,createContext,useReducer,useEffect } from 'react'
import PropTypes from 'prop-types'
import { bookReducer } from '../reducers/BookReducer';

export const BookContext=createContext();

function BookContextProvider(params) {

    const [books,dispatch]= useReducer(bookReducer,[],()=>{
        const localData=localStorage.getItem('books');
        return localData ? JSON.parse(localData):[];
    });

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])

    return(
        <BookContext.Provider value={{books,dispatch}}>
            {params.children}
        </BookContext.Provider>
    )


    
}

export default BookContextProvider;


