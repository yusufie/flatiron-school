const URL = 'http://localhost:3000/monsters'
let cur_page = 1

document.addEventListener('DOMContentLoaded', getData(cur_page))
document.addEventListener('DOMContentLoaded', nextPage)
document.addEventListener('DOMContentLoaded', prevPage)
document.addEventListener('DOMContentLoaded', createForm)

function getData(page) {
    newURL = URL + '/?_limit=50&_page=' + page
    fetch(newURL).then(resp=>resp.json()).then(json=>json.forEach(element => {
        renderMonster(element)
    }))
}

function renderMonster(monster) {
    const monsterContainer = document.querySelector('#monster-container')
    const newdiv = document.createElement('div')
    newdiv.id = monster.id
    const h2 = document.createElement('h2')
    h2.textContent = monster.name
    const h4 = document.createElement('h4')
    h4.textContent = "Age: "+monster.age
    const p = document.createElement('p')
    p.textContent = "Bio: "+monster.description
    newdiv.append(h2)
    newdiv.append(h4)
    newdiv.append(p)
    monsterContainer.append(newdiv)
}

function nextPage() {
    const forwardBtn = document.querySelector('#forward')
    const monsterContainer = document.querySelector('#monster-container')
    forwardBtn.addEventListener('click', ()=>{
        cur_page = cur_page+1
        monsterContainer.innerHTML = ''
        getData(cur_page)
    })
}

function prevPage() {
    const backBtn = document.querySelector('#back')
    const monsterContainer = document.querySelector('#monster-container')
    backBtn.addEventListener('click', ()=>{
        if (cur_page==1) {
            cur_page = cur_page
        } else {
            cur_page = cur_page-1
        }
        monsterContainer.innerHTML = ''
        getData(cur_page)
    })
}

function createForm() {
    const formContainer = document.querySelector('#create-monster')
    const form = document.createElement('form')
    const label1 = document.createElement('label')
    label1.name = 'name-input'
    label1.textContent = 'Name: '
    const nameInput = document.createElement('input')
    nameInput.id = 'name-input'
    nameInput.name = 'name-input'
    const label2 = document.createElement('label')
    label2.name = 'age-input'
    label2.textContent = 'Age: '
    const ageInput = document.createElement('input')
    ageInput.id = 'age-input'
    ageInput.name = 'age-input'
    const label3 = document.createElement('label')
    label3.name = 'bio-input'
    label3.textContent = 'Bio: '
    const bioInput = document.createElement('input')
    bioInput.id = 'bio-input'
    bioInput.name = 'bio-input'
    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Create'
    form.append(label1)
    form.append(nameInput)
    form.append(label2)
    form.append(ageInput)
    form.append(label3)
    form.append(bioInput)
    form.append(btn)
    formContainer.append(form)
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const newName = document.querySelector('#name-input').value
        const newAge = document.querySelector('#age-input').value
        const newBio = document.querySelector('#bio-input').value
        fetch(URL,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                'name': newName,
                'age': newAge,
                'description': newBio
            })
        }).then(resp=>resp.json())
        form.reset()
        alert('New Monster Added')
        getData(cur_page)
    })

}