import { createContext, useState } from "react";
import Axios from "axios";

const booksContext = createContext();

function Provider ({children}) {

    const [books, setBook] = useState([]);
    
    const fetchBooks = async () => {
        const response = await Axios.get("http://localhost:3001/books");
        setBook(response.data);
    }
 
    const createBook = async (title) => {
        const postResponse = await Axios.post("http://localhost:3001/books", {title});
        const updatedBooks = [
            ...books, 
            postResponse.data
       ]
        setBook(updatedBooks);
    }

    const deleteBookById = async (id) => {
      await Axios.delete("http://localhost:3001/books/"+ id);
        const updatedBooks = books.filter((book)=> {
            return book.id !== id;
        })
        setBook(updatedBooks);
    }

    const editBookbyId = async (id, newTitle)=>{
        const response = await Axios.put("http://localhost:3001/books/" + id, {
            title: newTitle
        });
        const updatedBooks = books.map((book)=>{
            if (book.id===id){
            return {
                ...book, 
                ...response.data
            };
        }
        return book;
       })
      setBook(updatedBooks); 
    }
    
    const valueToShare = {
        books, 
        fetchBooks, 
        createBook,
        deleteBookById, 
        editBookbyId
    }
    return (
        <booksContext.Provider value = {valueToShare}>
            {children }
        </booksContext.Provider> 
        );
} 

export {Provider};
export default booksContext;

