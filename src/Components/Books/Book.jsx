import React from 'react';
import './Book.scss'
import {Link} from "react-router-dom";

const Book =(props) => {
    const {
        title,
        authors,
        pageCount,
        imageLinks,
    } = props.data

    const showBooklHendle  =() => {
        const {setCurrentBook} = props;
        setCurrentBook(props.data)
    }
    return (
        <div className="book-element">
            <Link
            to={{
                pathname: `/book/${title}`,
              }}
            onClick={showBooklHendle}
            >
            <h1> {title} </h1>
            <img className="book-element-img" src={imageLinks.smallThumbnail} alt="book"/>
            <p>  {authors ?  "Author: " + authors.join(', ') : 'no author'} </p>
            <p> {pageCount ?  "Pages: " + pageCount + ' pg.' : 'no information about page count'}  </p>
            </Link>
        </div>
    )
}

export default Book