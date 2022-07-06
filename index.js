const inputOne = document.getElementById("input-one")
const inputTwo = document.getElementById("input-two")

let passwordLength = 16

const characters = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
    "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":",
    ";", "<", ">", ".", "?", "/"
]

let textCharacters = characters.toString().replace(/,/g, '')

function generatePassword() {

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * textCharacters.length)
        password += textCharacters[randomNumber]
            // password += textCharacters.substring(randomNumber, randomNumber + 1)
    }

    return password
}

function runGeneratePassword() {

    let inputOneTest = generatePassword()
    let inputTwoTest = generatePassword()

    inputOne.value = inputOneTest
    inputTwo.value = inputTwoTest
}


// function copyPassword() {
//     let copyText = document.getElementById("input-one")
//     copyText.select()
//     document.execCommand("copy")
// }