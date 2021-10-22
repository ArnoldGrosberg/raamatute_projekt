class UI {
	// help funktsion to add DOM element
	addUIelement(elementname, classname = '', textcontent = '', atributes={}){
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		// if we want to use atributes, for example a atribute is href with value #
		if(Object.keys(atributes).lenght > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
}

	addBook(book){
		// create list item
		const tr = this.addUIelement('tr', 'item');
		const bookName = this.addUIelement('th', 'book name',book.title);
		// create author and ISBN
		const bookAuthor = this.addUIelement('th', 'book author', book.autor);
		const bookISBN = this.addUIelement('th', 'book ISBN', book.isbn);
		// create link
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});

		// add book name, author, ISBN and link to list item
		tr.appendChild(bookName);
		tr.appendChild(bookAuthor);
		tr.appendChild(bookISBN);
		tr.appendChild(link);
		// find list to add created list item
		const list = document.querySelector('table');
		list.appendChild(tr);






		// find input to clear this value
		const input = document.querySelector('#book');
		input.value = '';
		const input1 = document.querySelector('#bookAuthor');
		input1.value = '';
		const input2 = document.querySelector('#bookISBN');
		input2.value = '';




		// log to console that book is added to UI
		book.addedToUI();
	}


	deleteBook(book){

		const deleteIcon = book.parentNode.lastChild;
		if(deleteIcon.textContent == "X"){

			if(confirm('Do you want to delete this book?')) {
				book.parentElement.remove();
			}

		}

	}


	deleteBooks(books){
		for (var i = books.length - 1; i >= 0; --i) {
			books[i].remove();
		}
	}

	getBooks(books){
		// create list item
		const tr = ui.addUIelement('tr', 'item');
		const bookName = ui.addUIelement('th', 'book name',books.title);
		// create author and ISBN
		const bookAuthor = ui.addUIelement('th', 'book author', books.autor);
		const bookISBN = ui.addUIelement('th', 'book ISBN', books.isbn);
		// create link
		const link = ui.addUIelement('a', 'secondary-content', 'X', {'href':'#'});

		// add book name, author, ISBN and link to list item
		tr.appendChild(bookName);
		tr.appendChild(bookAuthor);
		tr.appendChild(bookISBN);
		tr.appendChild(link);
		// find list to add created list item
		const list = document.querySelector('table');
		list.appendChild(tr);
	}
}