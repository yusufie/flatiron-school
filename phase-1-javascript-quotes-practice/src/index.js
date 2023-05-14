let url;
let body;
let id = 1;
let arr;
let count = 0;
document.addEventListener("DOMContentLoaded", () => {
    url = "http://localhost:3000/quotes";
    body = document.getElementsByName("body");
    callFetch();
    submitForm();
})

function callFetch() {
    fetch(url+"?_embed=likes")
        .then(res => res.json())
        .then(data => {
            arr = data;
            data.forEach(element => addQuote(element));
            addDeleteEventListener();
            addLikeEventListener();
        });
}

function addDeleteEventListener(){
    let deleteButtonList = document.getElementsByClassName("btn-danger");
    for(let i =0; i < deleteButtonList.length; i++) {
        deleteButtonList[i].addEventListener("click", deleteElement);
    }
}

function deleteReq(i) {
    fetch("http://localhost:3000/quotes/" + i, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => console.log(data));
}


function deleteElement(e){
    id = e.target.parentNode.id
    e.target.parentElement.innerHTML = "";
    debugger;
    deleteReq(id);
}

function addQuote(element) {
    const ul = document.getElementById("quote-list");
    ul.style.listStyle = "none";
    const li = document.createElement("li");
    li.className = "quote-card";
    li.setAttribute("id", id);
    id++
    li.innerHTML = `
      <blockquote class="blockquote">
        <p class="mb-0">${element.quote}</p>
        <footer class="blockquote-footer">${element.author}</footer>
        <br>
        
      </blockquote>
    `;
    const likeButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    likeButton.classList.add('btn-success');
    deleteButton.classList.add('btn-danger');

    likeButton.innerHTML = `Likes: <span>0</span>`
    deleteButton.innerHTML = `Delete`;

    likeButton.addEventListener("click", likeElement);
    deleteButton.addEventListener("click", deleteElement);

    li.appendChild(likeButton);
    li.appendChild(deleteButton);

    ul.append(li);
}

function submitForm() {
    const form = document.getElementById("new-quote-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newQuote = {
            "quote": e.target.quote.value,
            "author": e.target.author.value
        }
        postReq(newQuote);
        form.reset();
    })
}

function  postReq(obj) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => addQuote(data));
}

function addLikeEventListener(){
    let likeButtonList = document.getElementsByClassName("btn-success");
    for(let i =0; i < likeButtonList.length; i++) {
        likeButtonList[i].addEventListener("click", likeElement);
    }
}

function likeElement(e) {
    id = e.target.parentNode.parentElement.id;

    count++;
    e.target.innerHTML = `Likes: <span>${count}</span>`;
    const likeCounter = {
        "quoteId": id,
        createdAt: Date.now()
    }
    postLikes(likeCounter);
}

function postLikes(likeObj) {
    fetch("http://localhost:3000/likes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(likeObj)
    })
        .then(res => res.json())
        .then(data => data)
}