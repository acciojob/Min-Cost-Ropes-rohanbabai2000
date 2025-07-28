function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.forEach(func);
	function func(i, arr){
		if(arr[i]<arr[i+1]){
			let temp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=temp;
		}
	}
	
		let n=arr.length;
		let s=0;
		for(let i=0;i<n;i+2){
			s=s+(arr[i]+arr[i+1]);
		}
		return s;
	}
  
}

module.exports=mincost;
