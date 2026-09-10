const myLibrary = [];

function Book(title, author) {
this.title = title;
this.author = author;
this.randomUUID = crypto.randomUUID();
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this);
};

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("To Kill a Mockingbird", "Harper Lee");
let book3 = new Book("1984", "George Orwell");
book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

console.log(myLibrary);

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookItem = document.createElement("li");
    

    bookItem.textContent = `${book.title} by ${book.author} `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBook(book.randomUUID);
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        bookItem.style.textDecoration = "line-through";
      } else {
        bookItem.style.textDecoration = "none";
      }
    });

    bookItem.appendChild(checkbox);
    bookItem.appendChild(removeButton); 
    bookList.appendChild(bookItem);
  });
}





function addBook() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the book author:");

  if (title && author) {
    const newBook = new Book(title, author);
    newBook.addBookToLibrary();
    displayBooks();
  } else {
    alert("Both title and author are required.");
  }
}





function removeBook(randomUUID) {
  const bookIndex = myLibrary.findIndex((book) => book.randomUUID === randomUUID);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
  }
}  



