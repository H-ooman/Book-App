import React from 'react'
import {IoSearchSharp} from "react-icons/io5";
import styles from "./searchbox.module.css"

function Searchbox({search , setSearch , searchhandler}) {
  return (
    <div className={styles.search}>
        <input type="text" placeholder='search title'
          value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
          />
        <button onClick={searchhandler}><IoSearchSharp/></button>
    </div>
  )
}

export default Searchbox