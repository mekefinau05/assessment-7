//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


function sumZero(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] - arr[i + 1] === 0){
        
        return true

        } else {

            return false
        }
    }
    
}  




console.log(sumZero([3,3]))