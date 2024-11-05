import { useState } from "react";
import Bookedit from "./Bookedit";
import useBookContext from "../hooks/use-book-context";


function Bookshow ({bookData}) {

    const { deleteBookById } = useBookContext(); 

    const [showEdit, setShowEdit] = useState(false);
    
    const bookDeleteHandler = (id) => {
        deleteBookById(bookData.id);
    }
    
    const bookEditeHandler = () => {
        setShowEdit(!showEdit);
    }

    const showEditHandler = (status)=>{
        setShowEdit(status);
    }

    let content =   <h5 className ="card-title"> {bookData.title} </h5>
    if (showEdit){
     content =   <Bookedit bookData = {bookData} showEditHandler = {showEditHandler}/>
    }
    
    return (
        <div className="container ">
            <div className="row">
            <div className="col">
                <div className="card" style = {{width: "18rem"}}>
                <div className="d-flex flex-row-reverse">
                <button onClick = {bookDeleteHandler} type="button" className="btn-close" aria-label="Close"></button> 
                <button onClick = {bookEditeHandler} type="button" className="btn-edit"  aria-label="edit"></button>
                </div>
                <img src="https://picsum.photos/200/300" className = "card-img-top" alt={bookData.title} />
                <div className = "card-body">
                   {content}
                  
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Bookshow;
