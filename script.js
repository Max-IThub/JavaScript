
let array = [8, 2, 1, 0, 100, 1];
let lastElementOfArray = array[array.length - 1];
let answer = 0;
function arrFunc(arr, lastElement) {
    
        if (arr.length >= 1) {
            
            if (arr[0] < lastElementOfArray) { 
                answer = answer+1
                arr.shift()
                    arrFunc(arr, lastElement);
            }
            else { 
                arr.shift()
                    arrFunc(arr,lastElement);
            }
        }
    return answer;
}

console.log(arrFunc(array,lastElementOfArray))