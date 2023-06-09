
import React, { useEffect, useState } from 'react';
import './App.css';
import { addBook, DeleteAll, filteredBooks, showAllBooks } from './Component/Books';
import './index.css';
export function MainDev() {
  const [book, setBook] = useState([]);
  const [bookName, setBookName] = useState("");
  const [search, setSearch] = useState("");
  const ShowResult = showAllBooks(book, setBook);
  const filteredList = filteredBooks(book, search.trim(), setBook);2' 
3
  useEffect(() => {
    fetch('http://localhost:5000/', { method: 'GET' })
      .then(response => response.json()).then((res) => setBook(res['book']))
      .catch((err) => console.log(err))
  }, ([]))

  return (<>
    {/* search */}
    <form className="form-inline searchBar" onSubmit={(event) => event.preventDefault()}>
      <input className="form-control mr-sm-2 " id="addelement" type="text" placeholder="search" aria-label="g" value={search}
        onChange={(e) => setSearch(e.target.value)} />

    </form>
    {/* main dev for contents  */}
    <div className='main'>
      <form className="form-inline" onSubmit={(event) => event.preventDefault()}>
        {/* add element */}
        <input className="form-control mr-sm-2 addelement" id="addelement" type="text" placeholder="Add" aria-label="Search" value={bookName}
          onChange={(e) => setBookName(e.target.value)} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => addBook(bookName, book, setBook, setBookName)}>Add</button>
      </form>

      {/* main content */}
      {!search ? (ShowResult) : filteredList}
      {/* delete button */}
      <div className='books'>
      </div>
      <button className='btn btn-danger Delete-all' onClick={() => DeleteAll(setBook)}> Delete all </button>
    </div >

  </>
  );
}







// {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => { setShow(false) }}>Add</button> */ }
