//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function uniqueChar(word) {

    let array = []
    let number = 0

    for(let i = 0; i < word.length; i++) {
    number = word.charCodeAt(i);
    array.push(number)
    }
    for(let i = 0; i < array.length; i++) {
    
        for(let j = 0; j < array.length; j++) {

            if(array[i] === array[j] && i !== j) {

                return false;
            }
        }
        
    }
    return true;
}
console.log(uniqueChar("Moonday"))

