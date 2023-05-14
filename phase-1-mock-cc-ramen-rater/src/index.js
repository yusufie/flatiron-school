// write your code here
// write your code here
const baseUrl = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu')

// load up the dom
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
})

//fetch ramen data
function displayRamen() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(getAllRamen)
}

function getAllRamen(ramenArr) {
    ramenArr.forEach(getRamen)
}

//display images to DOM, append images to div
function getRamen(ramenObj) {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramenObj.image
    ramenMenu.append(ramenImg)

    // event listener on click for images
    ramenImg.addEventListener('click', () => {
        const img = document.querySelector('.detail-image')
        img.src = ramenObj.image
        img.alt = ramenObj.name

        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramenObj.name
        
        const ramenResta = document.querySelector('.restaurant')
        ramenResta.textContent = ramenObj.restaurant
        
        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramenObj.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramenObj.comment
    })
}

//create from
function createRamenForm() {
    const newRamenForm = document.getElementById('new-ramen')

    newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() // stop the page from refreshing on form submit
    
    // create new ramen object
    const newRamenObject = {}
    newRamenObject.name = document.querySelector('#new-name').value
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value
    newRamenObject.image = document.querySelector('#new-image').value
    newRamenObject.rating = document.querySelector('#new-rating').value
    newRamenObject.comment = document.querySelector('#new-comment').value
    console.log(newRamenObject)

    // display new ramen in #ramen-menu (append?)
    const newRamenItem = document.createElement('img')
    newRamenItem.src = newRamenObject.image
    ramenMenu.append(newRamenItem)
    })
}


//initialize
displayRamen()
createRamenForm()