// Module Summary and Overview:

const nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < nums.length; i++){
    // console.log(nums[i]);   // <- this is for more 1 nums ..
    if(nums[i] > 3){
        break;
    }
    // console.log(nums[i]);
}

// for -minus:
for(let i = 0; i < nums.length; i++){
    // console.log(nums[i]);   // <- this is for more 1 nums ..
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i]);
}