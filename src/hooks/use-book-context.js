import { useContext } from "react";
import booksContext from "../context/books";

function useBookContext  () {
    return useContext(booksContext);
    
    
}

export default useBookContext;