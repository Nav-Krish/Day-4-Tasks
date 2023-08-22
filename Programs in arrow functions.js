//Prorams in arrow functions

//a.Print odd numbers in an array

   var arrowOdd=(arr)=>{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
   }
   arrowOdd([1,2,3,4,5,6,7,8,9,10])

//b.Convert all the strings to title caps in a string array

   var arrowTitilecaps=(str)=>{
    str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
   }
   console.log(arrowTitilecaps("guvi zen class"))

//c.Sum of all numbers in an array

   var arrowSum=(arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)  
   }
   arrowSum([1,2,3,4,5,6,7,8,9,10])

//d.Return all prime numbers in an array

   var arrowPrime=(arr)=>{
    var prime=[];
    var flag
    for(var i=0;i<arr.length;i++){
        if(arr[i]==2){
            prime.push(arr[i])
        }
        if(arr[i]<=1){
            continue;
        }else {
            for(var j=2;j<arr[i];j++){
                if(arr[i]%j==0){
                    flag=false
                    break
                }else{
                    flag=true
                }
            }
            if(flag){
                prime.push(arr[i])
            }
        }
    }
    console.log(prime)
   }
   arrowPrime([1,2,3,4,5,6,7,8,9,10])

//e.Return all palindromes in an array

   var arrowPal=(str)=>{
        var flag
        var pal=[];
        for(var i=0;i<str.length;i++){
            var p=str[i].toString().split('').reverse().join('');
            if(str[i]==p){
                pal.push(str[i])
            }
        }
        console.log(pal)
       }
       arrowPal(['carecar', 1344, 12321, 'did', 'cannot'])