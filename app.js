let submit = document.getElementById("submit");
let submitEdit = document.getElementById("submitEdit");
let myLibrary = [];

function Book(author, title, pageCount, haveRead) {//Constrctor function
    this.author = author,
    this.title = title,
    this.pageCount = pageCount,
    this.haveRead = haveRead
};

function pushLibrary(parameter){//takes an object and pushes it to library
    myLibrary.push(parameter);
};


function addBookToLibrary() {//Adds html inputs to a new object 
    let authorEl = document.getElementById("author").value;
    let titleEl = document.getElementById("title").value;
    let pageCountEl = document.getElementById("pageCount").value;
    let haveReadEl = document.getElementById("haveRead").value;
    let newBook = new Book(authorEl, titleEl, pageCountEl, haveReadEl);
//Need to check if there are multiple of the same book
    console.log(newBook);
    pushLibrary(newBook);
};
let myNewBook = addBookToLibrary();


function displayLibrary() {//Puts newest library element into text onscreen
    let libraryList = document.getElementById("libraryList");
    // const bookSelf = document.getElementById("bookSelf");
    const bookSelftTable = document.getElementById("book-self-table");
    const i = myLibrary.length - 1;

    //Create div to house library list elements in html
    const bookDiv = document.createElement("tr");
        bookDiv.classList.add('book-container');
        bookDiv.setAttribute('data-index', i);//IDK whats the purpose of this
    //Create author paragraph html element
    const authorP = document.createElement("td");
        authorP.textContent = myLibrary[i].author;
        bookDiv.appendChild(authorP);
    //Create title paragraph html element
    const titleP = document.createElement("td");
        titleP.textContent = myLibrary[i].title;
        bookDiv.appendChild(titleP);
    //Create page count paragraph html element
    const pageCountP = document.createElement("td");
        pageCountP.textContent = myLibrary[i].pageCount;
        bookDiv.appendChild(pageCountP);
     //Create have read paragraph html element
    const haveReadP = document.createElement("td");
        haveReadP.textContent = myLibrary[i].haveRead;
        bookDiv.appendChild(haveReadP);

        //Allows haveRead to switch between read and haveRead
        haveReadP.addEventListener("click", function(){   
            if (haveReadP.textContent == "Not Read"){
                haveReadP.textContent = "Have Read";
                myLibrary[i].haveRead = haveReadP.textContent;
            } else{
                haveReadP.textContent = "Not Read";
                myLibrary[i].haveRead = haveReadP.textContent;
            }
        });

    //Creates the delete button
    const img = document.createElement("img");
        img.setAttribute('id', "deleteBtn")
        const imgTd = document.createElement("td");
        imgTd.setAttribute("id", "buttonIcons");
        bookDiv.appendChild(imgTd);
        img.src = "https://cdn-icons-png.flaticon.com/512/3686/3686905.png";
        imgTd.appendChild(img);
        //Allows delete
        img.addEventListener("click", function(){
            // myLibrary.shift(i); im trying to remove the object from array
            bookDiv.remove(i);
        });
    //Creat edit button and functions
    const editImg = document.createElement("img");
        editImg.setAttribute("id", "editIcon");
        imgTd.appendChild(editImg);
        editImg.src = "https://cdn-icons-png.flaticon.com/512/9794/9794055.png";
        //Allows editing
        editImg.addEventListener("click", function(){
            //Opens modal
            modal.showModal();
            submit.style.display = "none";
            submitEdit.style.display = "initial";
            // Populate the form fields with the book's data
            document.getElementById("author").value = myLibrary[i].author;
            document.getElementById("title").value = myLibrary[i].title;
            document.getElementById("pageCount").value = myLibrary[i].pageCount;
            document.getElementById("haveRead").value = myLibrary[i].haveRead;

             // Update the book in the library when the form is submitted
            submitEdit.addEventListener("click", function () {
                myLibrary[i].author = document.getElementById("author").value;
                myLibrary[i].title = document.getElementById("title").value;
                myLibrary[i].pageCount = document.getElementById("pageCount").value;
                myLibrary[i].haveRead = document.getElementById("haveRead").value;
                // Update the book's data in the table
                authorP.textContent = myLibrary[i].author;
                titleP.textContent = myLibrary[i].title;
                pageCountP.textContent = myLibrary[i].pageCount;
                haveReadP.textContent = myLibrary[i].haveRead;

                submit.style.display = "initial";
                submitEdit.style.display = "none";
                modal.close();
            });
        console.log(myLibrary);
        });

        
        bookSelftTable.appendChild(bookDiv);
};


//Open and Close form
    const openForm = document.getElementById("openForm");
    const closeForm = document.getElementById("closeForm");
    const modal = document.querySelector(".modal");
    openForm.addEventListener("click", function(){
        modal.showModal();
    });
    submit.addEventListener("click", function(){
        document.getElementById("bookSelf").style.display = "flex";
        modal.close();
    });
    closeForm.addEventListener("click", function(){
        modal.close();
    });



function start(){//Begins process
    addBookToLibrary();
    displayLibrary();
    return false;   //Tells the site to not reload page on submit 
};
