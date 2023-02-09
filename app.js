let authorEl = document.getElementById("author").value;
let titleEl = document.getElementById("title").value;
let pageCountEl = document.getElementById("pageCount").value;
let haveReadEl = document.getElementById("haveRead").value;
let libraryList = document.getElementById("libraryList");
let submit = document.getElementById("submit");
// document.getElementById("bookSubmit").reset;

let myLibrary = [];
let newBook = [];
// let newDiv


function Book(author, title, pageCount, haveRead) {
    this.author = author,
    this.title = title,
    this.pageCount = pageCount,
    this.haveRead = haveRead
};

Book.prototype.library = function(){
    // newDiv = document.createElement("div");
    newBook.push(this.author, this.title, this.pageCount, this.haveRead);
    let newlibrary = myLibrary.concat([newBook]);
// var arr = [0];
// var elem = [1, 2, 3];
// var newArr = arr.concat([elem]);
// console.log(newArr); // => [0,[1,2,3]]
};

function addBookToLibrary() {
  // do stuff here
    titleEl = new Book(authorEl, titleEl, pageCountEl, haveReadEl);
};

function displayLibrary(){
    libraryList.textContent = myLibrary;
};


addBookToLibrary();
displayLibrary();
console.log(titleEl.author);
console.log(newBook);