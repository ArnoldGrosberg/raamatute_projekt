// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
// form submit event
const form = document.querySelector('form');
const bookInput = document.querySelector('#book');
// bookList X click event
const bookList = document.querySelector('ul');
bookList.addEventListener('click', deleteBook);

// clear button event
const clearBtn = document.querySelector('#clear-books');
clearBtn.addEventListener('click', deleteBooks);

// page reload
document.addEventListener('DOMContentLoaded', getBooks);

// events
// form submit event
form.addEventListener('submit', addBook);

function addBook(e){
	// create a new object Book with input value
	const book = new Book(bookInput.value);
	// add book value to the visual by UI object
	ui.addBook(book);
	// add book value to the LS by LS object
	ls.addTask(book);
	e.preventDefault();
}

function deleteBook(e){
	// get book name
	let book = e.target.parentElement.firstChild;
	// delete book value from visual by UI object
	ui.deleteBook(task);
	// change book element content before deleting from LS
	book = book.textContent;
	// delete book value from LS by LS object
	ls.deleteBook(book);
}

function deleteBooks(e){
	// delete all books from UI
	let books = document.querySelector('ul');
	ui.deleteBooks(books);
	// delete books from LS
	ls.deleteBooks();
}

function getBooks(e){
	// get books from LS by this localStorage name
	books = ls.getData('books');
	// create book list by UI
	ui.getBooks(books);
}