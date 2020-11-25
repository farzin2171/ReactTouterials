import React, { createContext,useState } from 'react'

export const BookContext=createContext();

function BookContextProvider(props){

 const[books,setBooks]=useState([
   {title:"gold finsh",id:1}
 ]);

 return (
     <BookContext.Provider value={{books}}>
         {props.children}
     </BookContext.Provider>
 )
}

export default BookContextProvider;
 