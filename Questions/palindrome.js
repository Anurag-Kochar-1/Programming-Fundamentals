// palindrome.js

const checkPalindrome = (value) => {
    let myValue = value.toString().split("").reverse().join("")
    return myValue === value.toString() ? true : false

}


const myName = checkPalindrome("anurag")
console.log(myName)