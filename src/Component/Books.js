

//to add books
export const addBook = (bookName, setBook, setBookName) => {
    //we have to first check if the input is empty string 
    bookName !== "" &&
        setBook((t) => [...t, bookName.trim()]);
    setBookName("")//we change the input field value to ""
};


const deleteIthBook = (i, book, setBook) => {
    const updatedBooks = [...book]; //we will copy its value to variable other after deleting i-th value
    var other = [];
    let length = updatedBooks.length
    let deleted = length - 1 - i; //we can't simply pop and assume it delete it to delete we have to know when it will be deleted 
    // if we want to delete i-th element we have to come all along to i and pop that element its formula is length-i-1
    for (let index = 0; index < length; index++) {
        if (index !== deleted)
            other.push(updatedBooks.pop())//we push the value if it is not to be deleted
        else
            updatedBooks.pop() //we delete it i.e with out copying its value if it is to be deleted
    } setBook(other.reverse()); //the value we get above is reversed we ned to make it normal
}


export function showAllBooks(book, setBook) {
    return book.map((books, index) => {
        return (

            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{books}</span>
                <button className='btn btn-danger delete' onClick={() => { deleteIthBook(index, book, setBook) }} >Delete</button> </div>
        )
    })
}
//to filter books by name 
export function filteredBooks(books, filter, setBook) {
    return books.filter((book) => book.substring(0, filter.length) === filter).map((book, index) => {
        return (
            <div key={index} className='book bg-secondary'>
                <span className='book-name'>{book}</span>
                <button className='btn btn-danger delete' onClick={() => { deleteIthBook(index, books, setBook) }}  >Delete</button>
            </div>
        )
    })
}


export const DeleteAll = (setBook) => {
    setBook([])
};
