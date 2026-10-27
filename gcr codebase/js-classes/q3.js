// Q3. Book Class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

let books = [
    new Book("Java", "James", "101"),
    new Book("Python", "Guido", "102"),
    new Book("JavaScript", "Brendan", "103")
];

let availableBooks = books.filter(book => !book.isIssued);

console.log("Available books:");
console.log(availableBooks);

let isbn = "102";

let book = books.find(book => book.isbn === isbn);

if (book && !book.isIssued) {
    book.issueBook();
    console.log("Book issued:", book.title);
} else {
    console.log("Book not available");
}
