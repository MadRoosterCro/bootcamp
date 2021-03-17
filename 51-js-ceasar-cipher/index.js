const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabetCipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"

const rot13 = (string, lettersForInput, lettersForOutput) => {
    let someString = "";
    for (let i=0; i<string.length; i++) {
        let stringIndex = lettersForInput.indexOf(string[i]);
        let alphabetValue = lettersForOutput[stringIndex];
        if (alphabetValue === undefined) {
            someString += "";
        } else {
            someString += alphabetValue;
        }
    }
    someString = string(someString);
    return someString;
}

const encryptButton = document.getElementById("encrypt");
const result = document.querySelector(".result");
const input = document.querySelector("textarea");
encryptButton.addEventListener("click", () => {
    result.innerText = rot13()
} )