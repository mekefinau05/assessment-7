//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function pangram(sentence){

    const alpha = 'abcdefghijklmnopqrstuvwxyz'

    for(let i=0; i<alpha.length; i++) {
        if(alpha[i] = (sentence).toLowercase().includes()) { 
            return true
            }else {
                return false
            }
    }
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))


