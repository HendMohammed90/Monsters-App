import React from "react";
import "./search-box.styles.css";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props)=>{
    return(
        <>
        <FaSearch style={{ color: '#95dada' , width:'25px', height: '25px'}} size={20} />
        <input placeholder="type your search keys" type="search" className="search-box" onChange={props.search} /></>
    )
}

export default SearchBox;