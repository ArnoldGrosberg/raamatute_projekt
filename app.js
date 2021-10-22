// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
// form submit event
const form = document.querySelector('form');
const bookInput = document.querySelector('#book');
const bookInput1 = document.querySelector('#bookAuthor');
const bookInput2 = document.querySelector('#bookISBN');
// bookList X click event
const bookList = document.querySelector('table');
bookList.addEventListener('click', deleteBook);

// clear button event
const clearBtn = document.querySelector('#clear-books');
clearBtn.addEventListener('click', deleteBooks);

// page reload
document.addEventListener('DOMContentLoaded', getBooks);

// events
// form submit event name
form.addEventListener('submit', addBook);

function addBook(e){
	// create a new object Book with the input values
	const book = new Book(bookInput.value, bookInput1.value, bookInput2.value);

	// add book value to the visual by UI object
	ui.addBook(book);
	// add book value to the LS by LS object
	ls.addBook(book);
	e.preventDefault();
}

function deleteBook(e){

	// get book name
	let book = e.target.parentElement.firstChild;
	// delete book value from visual by UI object
	ui.deleteBook(book);
	// delete book value from LS by LS object
	book = book.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
	ls.deleteBook(book);
}

function deleteBooks(e){
	// delete all books from UI
	let books = document.getElementsByClassName('item');
	ui.deleteBooks(books);
	// delete books from LS
	ls.deleteBooks();
}

function getBooks(e){
	// get books from LS by this localStorage name
	books = ls.getData('books');
	// create book list by UI
	books.forEach(ui.getBooks.bind(books));
}