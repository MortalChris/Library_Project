let submit = document.getElementById("submit");
let myLibrary = [];
// document.getElementById("bookSubmit").reset;

function Book(author, title, pageCount, haveRead) {//Constrctor function
    this.author = author,
    this.title = title,
    this.pageCount = pageCount,
    this.haveRead = haveRead
};

function pushLibrary(parameter){//takes an object and pushes it to library
    myLibrary.push([parameter]);
    console.log(myLibrary);
};


function addBookToLibrary() {//Adds html inputs to a new object 
    let authorEl = document.getElementById("author").value;
    let titleEl = document.getElementById("title").value;
    let pageCountEl = document.getElementById("pageCount").value;
    let haveReadEl = document.getElementById("haveRead").value;
    let newBook = new Book(authorEl, titleEl, pageCountEl, haveReadEl);
    console.log(newBook);
    pushLibrary(newBook);
};


function displayLibrary(){//Puts library array into text onscreen
    let libraryList = document.getElementById("libraryList");
    libraryList.textContent = JSON.stringify(myLibrary);
};



function start(){//Begins process
    addBookToLibrary();
    displayLibrary();
    return false;
};
