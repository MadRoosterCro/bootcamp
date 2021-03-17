const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!£$%^&*()_+";
const alphabetCipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890!£$%^&*()_+";

const rot13 = (string, lettersForInput, lettersForOutput) => {
    let someString = "";
    for (let i=0; i<string.length; i++) {
        let stringIndex = lettersForInput.indexOf(string[i]);
        let alphabetValue = lettersForOutput[stringIndex];
        if (alphabetValue === undefined) {
            someString += " ";
        } else {
            someString += alphabetValue;
        }
    }
    someString = String(someString);
    return someString;
}

const encryptButton = document.getElementById("encrypt");
const result = document.querySelector(".result");


encryptButton.addEventListener("click", () => {
    const input = document.querySelector("textarea").value;
    result.innerText = rot13(input, alphabet, alphabetCipher)
} )

const decryptButton = document.getElementById("decrypt");

decryptButton.addEventListener("click", () => {
    const input = document.querySelector("textarea").value;
    result.innerText = rot13(input, alphabetCipher, alphabet);
})

// const rot13 = (str) => {
//   const re = new RegExp("[a-z]", "i");
//   const min = "A".charCodeAt(0);
//   const max = "Z".charCodeAt(0);
//   const factor = 13;
//   let result = "";
//   str = str.toUpperCase();

//   for (let i = 0; i < str.length; i++) {
//     result += re.test(str[i])
//       ? String.fromCharCode(
//           ((str.charCodeAt(i) - min + factor) % (max - min + 1)) + min
//         )
//       : str[i];
//   }

//   return result;
// }

// const encryptButton = document.getElementById("encrypt");
// const decryptButton = document.getElementById("decrypt");
// const result = document.querySelector(".result");
// const input = document.querySelector("textarea");

// encryptButton.addEventListener("click", () => {
//   result.innerText = rot13();
// });

// decryptButton.addEventListener("click", () => {
//   result.innerText = rot13();
// });
