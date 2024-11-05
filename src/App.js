import Bookcreate from "./components/Bookcreate"; 
import { useEffect } from "react";
import Booklist from "./components/Booklist";
import useBookContext from "./hooks/use-book-context";


function App () {
    const {fetchBooks}= useBookContext();
   
    useEffect(()=>{ 
        fetchBooks();
    }, []);

   
    return (
        <div>
            <Booklist />
            <Bookcreate />
        </div>
    )
}

export default App;