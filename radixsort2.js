var x = [170, 45, 75, 90, 802, 2, 24, 66];

function radix_sort(arr)
{ 
	var nums = [[],[],[],[],[],[],[],[],[],[]];
	
	var max = 0

	
	
	
	for(var n = 0; n < arr.length; n++)
	{
		arr[n] = Math.floor(arr[n]/10);
	}
	
	function iteration(arr)
	{
		for(var a = 0; a < iterations; a++){
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
	}
}

radix_sort(x);