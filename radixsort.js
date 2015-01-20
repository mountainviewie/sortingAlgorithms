var x = [170, 45, 75, 90, 802, 2, 24, 66];

var nums = [[],[],[],[],[],[],[],[],[],[]];

function radix_sort(arr)
{
  for(b=0; b < arr.length; b++)
  {
    nums[arr[b] % 10].push(arr[b]);
  }
  arr = [];
  for(var c=0; c < nums.length; c++)
  {
    for(var d=0; d < nums[c].length; d++)
    {
      arr.push(nums[c][d]);
    }
  }
  nums = [[],[],[],[],[],[],[],[],[],[]];
  console.log(arr);
  
  
  for(e=0; e < arr.length; e++)
  {
    nums[Math.floor((arr[e]/10)) % 10].push(arr[e]);
  }
  arr = [];
  for(var f=0; f < nums.length; f++)
  {
    for(var g=0; g < nums[f].length; g++)
    {
      arr.push(nums[f][g]);
    }
  }
  nums = [[],[],[],[],[],[],[],[],[],[]];
  console.log(arr);
  console.log(nums);
  
  for(h=0; h < arr.length; h++)
  {
    nums[Math.floor((arr[h]/100)) % 10].push(arr[h]);
  }
  arr = [];
  for(var i=0; i < nums.length; i++)
  {
    for(var j=0; j < nums[i].length; j++)
    {
      arr.push(nums[i][j]);
    }
  }
  console.log(arr);
  
}



radix_sort(x);