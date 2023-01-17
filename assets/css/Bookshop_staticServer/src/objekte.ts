//objects in ts
interface Book{
    'isbn': string,
    'title': string, 
    'author': string,
    'year':number
}

let firstBook:Book = {
     'isbn' : "9780582541603",
     'title' : "David Copperfield",
     'author': "Charles Dickens",
     'year' : 1850
}
let secondBook:Book = {
     'isbn' : "9780439023481",
     'title' : "The Hunger Games",
     'author': "Suzanne Collins",
     'year' : 2008
}
let thirdBook:Book = {
     'isbn' : "9780007136599",
     'title' : "The Lord of the Rings",
     'author': "John Ronald Reuel Tolkien",
     'year' : 2001
}
let fourthBook:Book = {
     'isbn' : "9782253098690",
     'title' : "Blackout – Morgen ist es zu spät",
     'author': "Marc Elsberg",
     'year' : 2012
}
let fifthBook:Book = {
     'isbn' : "9780061833106",
     'title' : "The Colour Of Magic",
     'author': "Terry Prachet",
     'year' : 1983
}
let Books = [firstBook, secondBook, thirdBook, fourthBook, fifthBook]
export {Books}