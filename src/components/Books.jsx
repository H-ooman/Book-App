 import { useState } from "react";

import {books as bookData} from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";

import styles from "./books.module.css"
import Searchbox from "./Searchbox.jsx";


function Books() {
    const [books,setBooks] = useState(bookData);
    const [liked,setLiked] = useState([]);
    const [search,setSearch] = useState([]);

    const handelLikeList = (book , status) => {
        if(status){
            const newLikedList = liked.filter(i => i.id !== book.id );
            setLiked(newLikedList)
        } else {
            setLiked(liked => [...liked,book]);
        }
    };

    const searchhandler = () => {
        if(search){
            const newBooks = bookData.filter(book => 
            book.title.toLowerCase().includes(search));
            setBooks(newBooks);
        } else {
            setBooks(bookData);
        }
    }

  return (
   <>
   <Searchbox search={search} setSearch={setSearch} searchhandler={searchhandler}/>
     <div className={styles.container}>
        <div className={styles.cards}> {books.map(( book )=> (
        <BookCard key={book.id} data={book} handelLikeList={handelLikeList }/>
        ))}</div>
        <div className={styles.favorite}>
            <h4>Favorites</h4>
            {!!liked.length && (<div>{liked.map(book => <SideCard key={book.id} data={book}/>)}</div>)}
        </div>
    </div>
   </>
  )
}

export default Books;