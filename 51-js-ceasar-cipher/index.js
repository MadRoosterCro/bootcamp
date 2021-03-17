const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabetCipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"

const rot13 = (string, input, output) => {
    let someString = "";
    for (let i=0; i<string.length; i++) {
        let stringIndex = input.indexOf(string[i]);
        let alphabetValue = output[stringIndex];
        if (alphabetValue === undefined) {
            someString += "";
        } else {
            someString += alphabetValue;
        }
    }
    someString = string(someString);
    return someString;
}

const encryptButton = document.getElementById("encrypt")
encryptButton.addEventListener("click", () => {
    
} )