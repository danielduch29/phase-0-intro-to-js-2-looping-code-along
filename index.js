// Code your solutions in this file
function writeCards(arr, eventName){
    let result;
    for(let i = 0;i < arr.length;i++){
         result = (`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
         debugger; 
    }
    return result
}

function countDown(num){
    let i = 0;
    while(i <= num){
       console.log(num--);
    }
    return num
}