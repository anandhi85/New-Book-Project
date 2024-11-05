import Bookshow from "./Bookshow";
import useBookContext from "../hooks/use-book-context";

function Booklist () {
    
    const {books} = useBookContext();
    const renderedBooks = books.map((book)=>{
        return ( 
            <Bookshow key = {book.id} bookData = {book} />
        )
   })
    return (
        <div> 
            {renderedBooks}
           
        </div>
    )
}
export default Booklist;
