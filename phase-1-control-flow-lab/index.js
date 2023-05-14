function scuberGreetingForFeet(num){
  // Write your code here!
  if(num <= 400){
    return "This one is on me!"
  }else if(num > 400 && num < 2000){
    return("That will be twenty bucks.")
  }else if(num > 2000 && num < 2500){
    return("I will gladly take your thirty bucks.")
  }else if(num > 2500){
    return("No can do.")
  }
}


function ternaryCheckCity(target){
  // Write your code here!
  if(target == "NYC"){
    return "Ok, sounds good."
  } else if(target == "Pittsburgh"){
    return "No go."
  }
}


function switchOnCharmFromTip(amount){
  // Write your code here!
  if(amount == "generous"){
    return "Thank you so much."
  }else if(amount == "not as generous"){
    return "Thank you."
  }else if(amount == "thanks for everything"){
    return "Bye."
  }
}