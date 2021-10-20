class LS {
	//help function to get and set data at LS
	getData(name){
		let data;
		if(localStorage.getItem(name) === null){
			data = [];
		}else{
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data){
			localStorage.setItem(name, JSON.stringify(data));
		}

		// add book to LS
	addBook(book){
		// set data to the LS
		let books = this.getData('books');
		books.push(book);
		this.setData('books', books);
		// log to console that book is added to LS
		book.addedToLS();
	}

	// delete book from LS
	deleteBook(book){
		let books = this.getData('books');
		books.forEach(function(booksElement, booksIndex){
			if(booksElement.name === book){
				books.splice(booksIndex, 1);
			}
		});
		this.setData('books', books);
	}


	// delete all books from LS
	deleteBooks(){

		localStorage.clear();
	}

	
}