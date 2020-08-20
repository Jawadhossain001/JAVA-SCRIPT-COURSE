// When to return from a function and from where:

function evenify(num){
    if(num % 2 == 0){
        // console.log(num, ': is even number')
        // return num;
        result = num;
    }
    else{
        // console.log(num*2, ': is odd number')
        return num*2;
    }
    // return 5000;
    return result;
}

var result = evenify(13);
var square = result * result;
// console.log('result', result);
console.log('square', square);


function evenify_all(nums){
    var even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num)
        even_array.push(result);
    }
    return even_array;
}

var nums = [5, 12, 89, 18, 8];
var nums_even = evenify_all(nums)
console.log(nums_even);


// function doubleNumber(num) {
//       return num * 2;
//     }
//     var result = doubleNumber(31);
//     console.log(result);