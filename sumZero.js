//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


function sumZero(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++){
        if(i !==j && arr[i] + arr[j] ===0 ){
            return true
            } 
        }
    }
    return false
}  

console.log(sumZero([2,3,-3,4]))
// Time Complexity O(n^2)
// Space Complexity O(1)