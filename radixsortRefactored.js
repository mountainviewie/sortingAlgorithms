var x = [170, 45, 75, 90, 802, 2, 24, 66];

function radix_sort(arr)
{
	var nums = ([],[],[],[],[],[],[],[],[],[]);
	function iteration(arr)
	{
		for(var i=0; i<3; i++)
		{
			nums[Math.floor(arr[i] / Math.pow(10,i)) % 10].push(arr[i]);
		}
		arr = [];
		for (var j = 0; k < nums.length; j++)
		{
			for (var k = 0; k<nums[j].length; k++)
			{
				arr.push(nums[j][k]);
			}
		}
		nums = ([],[],[],[],[],[],[],[],[],[]);
	}
}

radix_sort(x);