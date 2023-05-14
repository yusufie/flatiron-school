let counter = parseInt(document.querySelector('#counter').textContent)

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const submit = document.querySelector('#submit')
const commentList = document.querySelector('#list') 

function increaseCounter(){
    counter++
        document.querySelector('#counter').innerHTML = counter


}

let numberCounter = setInterval(increaseCounter,1000)

        plus.addEventListener('click', () => {
            counter++
                document.querySelector('#counter').innerHTML = counter
        })

        minus.addEventListener('click', () => {
            counter--
                document.querySelector('#counter').innerHTML = counter
        })

        let clickedButton = {};
        const heartButton = document.getElementById("heart");

  heartButton.addEventListener("click", () => {

    if (clickedButton[counter]) {   //2nd => if its not 1st click, increase counter by 1
      clickedButton[counter] = clickedButton[counter] + 1;
    } else {        //1st => if it is the first click, create counter and assign 1
      clickedButton[counter] = 1;
    }

    const list = document.querySelector("ul");
    const element = document.getElementById(counter); //auto counter

    if (element) { 
      element.textContent = `${counter} has ${clickedButton[counter]} likes` ;
    } else { //1st => if it is the first click, create a li element and apply following
      const newList = document.createElement("li");
        newList.setAttribute("id", counter);
          newList.textContent = `${counter} has ${clickedButton[counter]} likes` ;

      list.appendChild(newList);
    }
  });

        let isItWorking = true

        pause.addEventListener('click', () => {
            if(isItWorking === true){
                pause.textContent = 'resume'
                isItWorking = false

                plus.disabled = true
                minus.disabled = true
                heart.disabled = true

            clearInterval(numberCounter)

            }else if(isItWorking === false){
                pause.textContent = 'pause'
                isItWorking = true

                plus.disabled = false
                minus.disabled = false
                heart.disabled = false

            numberCounter = setInterval(increaseCounter,1000)
            }
        })

       const commentUl = document.createElement('ul')
        commentList.append(commentUl)

        submit.addEventListener('click', (e) => {
            e.preventDefault()

          const commentLi = document.createElement('li')
            commentLi.textContent = document.querySelector('#comment-input').value
                commentUl.append(commentLi)
                 document.querySelector('#comment-input').value = ''
        })