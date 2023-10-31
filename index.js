const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPasswordOne = document.getElementById("passwordOne")
let randomPasswordTwo = document.getElementById("passwordTwo")

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function getRandomPasswords() {
    let randomPassword = ""
    for (i = 0; i < 12; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function displayPasswords() {
    randomPasswordOne.textContent = getRandomPasswords()
    randomPasswordTwo.textContent = getRandomPasswords()
}


