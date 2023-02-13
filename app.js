let submit = document.getElementById("submit");
let myLibrary = [];
// document.getElementById("bookSubmit").reset;

function Book(author, title, pageCount, haveRead) {
    this.author = author,
    this.title = title,
    this.pageCount = pageCount,
    this.haveRead = haveRead
};

function pushLibrary(){
    myLibrary.push([this.author, this.title, this.pageCount, this.haveRead]);
    // newDiv = document.createElement("div");
    // newBook.push(this.author, this.title, this.pageCount, this.haveRead);
    // let newlibrary = myLibrary.concat([newBook]);
};


function addBookToLibrary() {
  // do stuff here
    let authorEl = document.getElementById("author").value;
    let titleEl = document.getElementById("title").value;
    let pageCountEl = document.getElementById("pageCount").value;
    let haveReadEl = document.getElementById("haveRead").value;

    let theExample = new Book ("hi", "Title", "Page Count", "Have Read");
    let newBook = new Book( titleEl, authorEl, pageCountEl, haveReadEl);
    pushLibrary(theExample);
    pushLibrary(newBook);
};


function displayLibrary(){
    let libraryList = document.getElementById("libraryList");
    libraryList.textContent = myLibrary;
};


//     // titleEl = new Book (authorEl, titleEl, pageCountEl, haveReadEl);
// const theExample = new Book ("hi", "Title", "Page Count", "Have Read");
// const newExample = new Book ("2hi", "2Title", "2Page Count", "2Have Read"); 
// // theExample.library();
// // newExample.library();
// // titleEl.library();
// pushLibrary(theExample);
// pushLibrary(newExample);
// pushLibrary(titleEl);

console.log(myLibrary);
addBookToLibrary();
displayLibrary();



// var arr = [0];
// var elem = [1, 2, 3];
// var newArr = arr.concat([elem]);
// console.log(newArr); // => [0,[1,2,3]]