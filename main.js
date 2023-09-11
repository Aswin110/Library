// import './style.css'

const myLibrary = [];

function Book(title,author,pages,readOrNot){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
  this.info = function(){
    let readStatus = this.readOrNot? "read":"not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
  }
}

const theHobbit = new Book('The Hobbit','J.R.R Tolkein',295,false);

let text = theHobbit.info();

document.getElementById("app").innerText = text