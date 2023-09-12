import './style.css'

  document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var book = row.insertCell(0);
  var title = row.insertCell(1);
  var pages = row.insertCell(2);
  var readOrNot = row.insertCell(3);
  var remove = row.insertCell(4);

  book.innerText = document.getElementById("Book").value;
  title.innerText = document.getElementById("title").value;
  pages.innerText = document.getElementById("pages").value;

  let readButton = document.createElement("button");
  readButton.id = "btn";
  readButton.onclick = function(){
    if(readButton.textContent === "Read"){
      readButton.textContent = "Not Read!"
    }else if(readButton.textContent === "Not Read!"){
      readButton.textContent = "Read"
    }
  }

  if(document.getElementById("readOrNot").value ==="read"){
    readButton.textContent = "Read"
    readOrNot.appendChild(readButton)
  }else{
    readButton.textContent = "Not Read!"
    readOrNot.appendChild(readButton)
  }

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.id = "btn"

  this.row = row;
  let CurrentRow = this.row

  removeButton.onclick = function () {
    CurrentRow.remove();
  }
  remove.appendChild(removeButton);

  return false;
}

// const myLibrary = [];

// function Book(title,author,pages,readOrNot){
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readOrNot = readOrNot;
//   this.info = function(){
//     let readStatus = this.readOrNot? "read":"not read yet";
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
//   }
// }

// const theHobbit = new Book('The Hobbit','J.R.R Tolkein',295,false);
// let text = theHobbit.info();
// document.getElementById("app").innerText = text
