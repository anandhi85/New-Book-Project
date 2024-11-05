import { useState } from "react";
import useBookContext from "../hooks/use-book-context";

function Bookedit ({bookData, showEditHandler}) {
    
    const [title, setTitle] = useState(bookData.title);

    const {editBookbyId} = useBookContext();
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
   
    const submitEditHandler = (event)=> {
        event.preventDefault();
        editBookbyId(bookData.id, title);
        showEditHandler(false);
    }

    return (
        <form onSubmit= {submitEditHandler} >
            <label> Title</label>
            <input onChange = {handleTitleChange} name = "book_title" value = {title} />
            <button>Update</button>
        </form>
    )
}
export default Bookedit;