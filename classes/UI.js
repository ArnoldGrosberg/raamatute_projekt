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
		const li = this.addUIelement('li', 'collection-item', book.name);
		// create link
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		// add link to list item
		li.appendChild(link);
		// find list to add created list item
		const list = document.querySelector('ul');
		list.appendChild(li);
		// find input to clear this value
		const input = document.querySelector('#book');
		input.value = '';
		// log to console that book is added to UI
		book.addedToUI();
	}


	deleteBook(book){

		const deleteIcon = book.nextSibling;
		if(deleteIcon.textContent == "X"){

			if(confirm('Do you want to delete this book?')) {
				book.parentElement.remove();
			}

		}

	}


	deleteBooks(books){

		while(books.firstChild){
			books.removeChild(books.firstChild);
		}

	}

	getBooks(books){
		for(let i = 0; i<books.lenght; i++){
			// create list item
			const li = this.addUIelement('li', 'collection-item', books[i].name)
			// create link
			const link = this.addUIelement('a', 'secondary-content', 'X', {'href': '#'})
			// add link to list item
			li.appendChild(link);
			// find list to add created list item
			const list = document.querySelector('ul');
			list.appendChild(li);
		}
	}
}