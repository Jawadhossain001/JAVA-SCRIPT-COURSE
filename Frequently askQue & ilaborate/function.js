// When to use a function, function inside an array:

// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, ': is even number')
//     }
//     else{
//         console.log(num*2, ': is odd number')
//     }
// }

function evenify_all(){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // console.log(num * 2);
        if(num % 2 == 0){
            console.log(num, ': is even number')
        }
        else{
            console.log(num*2, ': is odd number')
        }
        // evenify(num);
    }
}

nums = [5, 12, 89, 18, 8];
evenify_all(nums);


friends_age = [13, 17, 19, 20, 18];
evenify_all(friends_age);



