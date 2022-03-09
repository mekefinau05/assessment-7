//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
let words = ['hi', 'world', 'helloWorld']
let longest = ''
const longestWord = (words) => {

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            longest = words[i];
        } else if (longest > words[i]) {
            longest = words[i];
            // console.log(longest)
        } 
    }
    return longest.length;
}

console.log(longestWord(words));

// Time Complexity O(n)
// Space Complexity O(1)