function getAllBooks() {
    fetch("http://localhost:3000/books")
        .then(resp => resp.json())
        .then(data => {
            createBookList(data);
        })
}
function createBookList(data) {
    const bookList = select('ul#list')
    for (let b of data) {
        const bookLi = create("li")
        bookLi.innerText = b.title
        bookLi.addEventListener('click', () => showBookDetails(b))
        bookList.append(bookLi)
    }
}
function showBookDetails(book) {
    const bookDisplay = select("#show-panel")
    const selectedBook = create('card')
    const title = create("h1")
    title.innerText = book.title
    const subtitle = create('h3')
    subtitle.innerText = book.subtitle
    const thumbnail = create('img')
    thumbnail.src = book.img_url
    const description = create('p')
    description.innerText = book.description
    //Display a LIKE button along with the book details. When the button is clicked, send a PATCH request to http://localhost:3000/books/:id with an array of users who like the book, and add a new user to the list.
    const likeBtn = create('button')
    likeBtn.innerText = "Like this book!"
    const likesList = create('ul')
    likeBtn.addEventListener("click", () => handleLikedBook(book, likesList))
    book.users.forEach(user => {
        const username = create('li')
        username.textContent = `${user.username} liked this!`
        likesList.append(username)
    })
    selectedBook.append(title, subtitle, thumbnail, description, likesList, likeBtn)
    bookDisplay.innerHTML = ""
    bookDisplay.append(selectedBook)
}

function handleLikedBook(book, likesList) {
    fetch(`http://localhost:3000/books/${book.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "users": [...book.users, { "id": 11, "username": "mark" }]
        })
    })
        .then(resp => resp.json())
        .then(data => updateLikedUsers(data, likesList))
}

function updateLikedUsers(data, likesList){
    console.log(data)
    likesList.innerHTML = '';
    data.users.forEach(user => {
        const username = create('li')
        username.textContent = `${user.username} liked this!`
        likesList.append(username)
    })
}
function create(el) { return document.createElement(el) }
function select(el) { return document.querySelector(el) }

document.addEventListener("DOMContentLoaded", function () {
    // When the page loads, get a list of books from http://localhost:3000/books and display their titles by creating a li for each book and adding each li to the ul#list element.

    getAllBooks();

    //     fetch("http://localhost:3000/books")
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //             data.forEach(book => {
    //                 console.log(book)
    //                 // When a user clicks the title of a book, display the book's thumbnail, description, and a list of users who have liked the book. This information should be displayed in the div#show-panel element.
    //                 function populateBooks(data) {
    //                     const bookList = select('ul#list')
    //                     const book = create("li")
    //                     function showBookDetails() {
    //                         function handleLikedBook() {
    //                             // console.log(data.id)
    //                             fetch(`http://localhost:3000/books/11`, {
    //                                 "Method": "PATCH",
    //                                 "Headers": {
    //                                     "Content-Type": "application/json",
    //                                     "Accept": "application/json"
    //                                 },
    //                                 "Body": JSON.stringify({
    //                                     "users": [...data.users,{"id": 11, "username": "mark"}]
    //                                 })
    //                             })
    //                             .then (resp => resp.json())
    //                             .then (data => console.log(data))
    //                         }
    //                         const bookDisplay = select("#show-panel")
    //                         const selectedBook = create('card')
    //                         const title = create("h1")

    //                         title.innerText = data.title
    //                         const subtitle = create('h3')
    //                         subtitle.innerText = data.subtitle
    //                         const thumbnail = create('img')
    //                         thumbnail.src = data.img_url
    //                         const description = create('p')
    //                         description.innerText = data.description
    // //Display a LIKE button along with the book details. When the button is clicked, send a PATCH request to http://localhost:3000/books/:id with an array of users who like the book, and add a new user to the list.
    //                         const likeBtn = create('button')
    //                         likeBtn.innerText = "Like this book!"
    //                         likeBtn.addEventListener("click", handleLikedBook)
    //                         const likesList = create('ul')
    //                         data.users.forEach(user => {
    //                             const username = create('li')
    //                             username.textContent = `${user.username} liked this!`
    //                             likesList.append(username)
    //                         })
    //                         selectedBook.append(title, subtitle, thumbnail, description, likesList, likeBtn)
    //                         bookDisplay.innerHTML = ""
    //                         bookDisplay.append(selectedBook)
    //                     }
    //                     book.addEventListener('click', showBookDetails)
    //                     book.innerText = data.title
    //                     bookList.append(book)
    //                 }
    //                 populateBooks(book)
    //             })
    // })

});
