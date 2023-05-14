function shout(string) {
    return string.toUpperCase();
}
  "Hello!".toUpperCase();


function whisper(string){
    let str = string
    return str.toLowerCase()
}
    "HELLO!".toLowerCase();


function logShout(string){
    let str = string
    console.log(str.toUpperCase())
}
    "hello".toUpperCase();


function logWhisper(string){
    let str = string
    console.log(str.toLowerCase())
}
    "HELLO".toLowerCase();

function sayHiToHeadphonedRoommate(string){
    let str = string

        if (string === "hello")
            return "I can\'t hear you!"
        else if (string === "HELLO")
            return "YES INDEED!"
        else (string === "I love you, Grandma.")
            return "I would love to!"
}