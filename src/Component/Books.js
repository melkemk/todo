
export function showAllBooks(book) {
    return book.map((books, index) => {
        return (

            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{books}</span>
                <button className='btn btn-danger delete'>Delete</button> </div>
        )
    })
}



export function filteredBooks(books, filter, show) {
    return !show && books.filter((book) => book.substring(0, filter.length) === filter).map((book, index) => {
        return (
            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{book}</span>
                <button className='btn btn-danger delete'>Delete</button>
            </div>
        )
    })
}


export const addBook = (bookName, setBook, setBookName) => {
    bookName !== "" &&
        setBook((t) => [...t, bookName.trim()]);
    setBookName("")
};

export const DeleteAll = (setBook) => {
    setBook([])
};
