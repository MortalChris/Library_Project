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
    myLibrary.push(parameter);
    console.log(myLibrary);
};


function addBookToLibrary() {//Adds html inputs to a new object 
    let authorEl = document.getElementById("author").value;
    let titleEl = document.getElementById("title").value;
    let pageCountEl = document.getElementById("pageCount").value;
    let haveReadEl = document.getElementById("haveRead").value;
    // let increment = increment + 1;                            <-------Was trying to find way to increment/differentiate names of new bjects
    let newBook = new Book(authorEl, titleEl, pageCountEl, haveReadEl);
    console.log(newBook);
    pushLibrary(newBook);
};


function displayLibrary() {//Puts newest library element into text onscreen
    let libraryList = document.getElementById("libraryList");
    const bookSelf = document.getElementById("bookSelf");
    const i = myLibrary.length - 1;

    //Create div to house library list elements in html
    const bookDiv = document.createElement("div");
        bookDiv.classList.add('book-container');
        bookDiv.setAttribute('data-index', i);//IDK whats the purpose of this
    //Create author paragraph html element
    const authorP = document.createElement("p");
        authorP.textContent = myLibrary[i].author;
        bookDiv.appendChild(authorP);
    //Create title paragraph html element
    const titleP = document.createElement("p");
        titleP.textContent = myLibrary[i].title;
        bookDiv.appendChild(titleP);
    //Create page count paragraph html element
    const pageCountP = document.createElement("p");
        pageCountP.textContent = myLibrary[i].pageCount;
        bookDiv.appendChild(pageCountP);
     //Create have read paragraph html element
    const haveReadP = document.createElement("p");
        haveReadP.textContent = myLibrary[i].haveRead;
        bookDiv.appendChild(haveReadP);

        bookSelf.appendChild(bookDiv);
};

//Open and Close form
const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const modal = document.querySelector(".modal");
openForm.addEventListener("click", function(){
    // document.getElementById("bookSubmit").style.display = "block";
    modal.showModal();
});
submit.addEventListener("click", function(){
    // document.getElementById("bookSubmit").style.display = "none";
    modal.close();
});
closeForm.addEventListener("click", function(){
    // document.getElementById("bookSubmit").style.display = "none";
    modal.close();
});



function start(){//Begins process
    addBookToLibrary();
    displayLibrary();
    return false;   //Tells the site to not reload page on submit 
};
