Skip to content
 This repository
Explore
Gist
Blog
Help
mountainviewie mountainviewie
 
You don't have any verified emails. We recommend verifying at least one email.
Email verification helps our support team verify ownership if you lose account access and allows you to receive all the notifications you ask for.
1  Watch 
  Star 0
 Fork 0jjun14/algorithm_practice
 branch: master  algorithm_practice/radix_sort.js
jjun14jjun14 36 minutes ago Finished Radix Sort
1 contributor
54 lines (44 sloc)  1.013 kb RawBlameHistory   
var x = [170, 45, 75, 90, 802, 2, 24, 66];

function radix_sort(arr)
{
  var nums = [[],[],[],[],[],[],[],[],[],[]];
  
  var largest = arr[0];
  
  //find largest number
  for(var n = 1; n < arr.length; n++)
  {
    if(arr[n] > largest)
    {
      largest = arr[n];
    }
  }
  
  //find number of digits in the largest number
  function largest_length(num)
  {
    count = 0;
    while(num > 0)
    {
      num = Math.floor(num/10);
      count++;
    }
    return count;
  }
  
  var iterations = largest_length(largest);
  
  // run the radix sort as many times as there are digits in the largest number
  for(var a=0; a < iterations; a++){
    for(var i = 0; i < arr.length; i++)
    {
      nums[Math.floor(arr[i] / Math.pow(10, a)) % 10].push(arr[i]);
    }
    arr = [];
    for(var j = 0; j < nums.length; j++)
    {
      for(var k = 0; k < nums[j].length; k++)
      {
        arr.push(nums[j][k]);
      }
    }
    nums = [[],[],[],[],[],[],[],[],[],[]];
  }

  console.log(arr);
}

radix_sort(x);

Status API Training Shop Blog About
© 2015 GitHub, Inc. Terms Privacy Security Contact
