//to add books
export const addBook = (bookName, book, setBook, setBookName) => {
    //we have to first check if the input is empty string 
    if (book.includes(bookName)) {
        setBookName("")//we change the input field value to ""
        return
    }
    bookName !== "" &&
        setBook((t) => [...t, bookName.trim()]);
    fetch('http://localhost:5000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookName: bookName })
    }).then(response => response.text())
        .then(text => {
            console.log(text); // Log the response from the server
        }).catch(error => {
            console.log(error);
        });
    setBookName("")
};


const deleteIthBook = (book, books, setBook) => {
    setBook(books.filter((x) => x !== book))
    fetch(`http://localhost:5000/${book}`, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete successful' }));
}


export function showAllBooks(book, setBook) {
    return book.map((books, index) => {
        return (

            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{books}</span>
                <button className='btn btn-danger delete' onClick={() => { deleteIthBook(books, book, setBook) }} >Delete</button> </div>
        )
    })
}
//to filter books by name 
export function filteredBooks(books, filter, setBook) {
    return books.filter((book) => book.substring(0, filter.length) === filter).map((book, index) => {
        return (
            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{book}</span>
                <button className='btn btn-danger delete' onClick={() => { deleteIthBook(book, books, setBook) }}  >Delete</button>
            </div>
        )
    })
}


export const DeleteAll = (setBook) => {
    setBook([])
};
