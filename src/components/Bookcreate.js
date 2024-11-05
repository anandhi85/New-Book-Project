import { useState} from "react";
import useBookContext from "../hooks/use-book-context";

function Bookcreate () {

    const {createBook} = useBookContext(); 
   
    const [title, setTitle] = useState ("");
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        createBook(title);
 
    }
    const handleBookChange = (event) =>{
        setTitle(event.target.value);
       
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Title</label>
                <input  onChange = {handleBookChange} name = "book_title" />
                <button>submit</button>
            </form>
        </div>
    );
}
 export default Bookcreate;