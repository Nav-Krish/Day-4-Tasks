// Programs in Anonymous function and IIFE

//a.Print odd numbers in an array
     
   //anonymous function
   var anonymousOdd=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
   }
   anonymousOdd([1,2,3,4,5,6,7,8,9,10])

   //IIFE
   (
    function(arr){
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
                console.log(arr[i])
            }
        }
    }
   )([1,2,3,4,5,6,7,8,9,10])

//b.Convert all the strings to title caps in a string array

   //anonymous function
   var anonymousTitlecaps=function(str){
    str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
   }
   console.log(anonymousTitlecaps("guvi zen class"))

   //IIFE
   (
    function(str){
        str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	str=str.join(' ');
    console.log(str)
    }
   )("guvi zen class")

//c.Sum of all numbers in an array

   //anonymous function
   var anonymousSum=function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)  
   }
   anonymousSum([1,2,3,4,5,6,7,8,9,10])

   //IIFE
   (
    function(arr){
        var sum=0;
        for(var i=0;i<arr.length;i++){
            sum+=arr[i]
        }
        console.log(sum)
    }
   )([1,2,3,4,5,6,7,8,9,10])

//d.Return all prime numbers in an array

   //anonymous function
   var anonymousPrime=function(arr){
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
   anonymousPrime([1,2,3,4,5,6,7,8,9,10])

   //IIFE
   (
    function(arr){
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
   )([1,2,3,4,5,6,7,8,9,10])

//e.Return all palindromes in an array

   //anonymous function
   var anonymousPal=function(str){
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
   anonymousPal(['carecar', 1344, 12321, 'did', 'cannot'])

   //IIFE
   (
    function(str){
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
   )(['carecar', 1344, 12321, 'did', 'cannot'])

//f.Return median of two sorted arrays of the same size

   //anonymous function
   var anonymousMedian=function(arr1, arr2){
    var merge=[]
    var n=arr1.length
    var i=0, j=0, k=0;
    while(i<n && j<n){
        if(arr1[i]<=arr2[j]){
            merge[k]=arr1[i]
            i+=1
            k+=1
        }else {
            merge[k]=arr2[j]
            j+=1
            k+=1
        }
    }
    while(i<n){
        merge[k]=arr1[i]
        i+=1
        k+=1
    }
    while(j<n){
        merge[k]=arr2[j]
        j+=1
        k+=1
    }
    var median=(merge[n-1]+merge[n])/2
    console.log(median)
   }
   anonymousMedian([1, 12, 15, 26, 38],[2, 13, 17, 30, 45])

   //IIFE
   (
    function(arr1,arr2){
            var merge=[]
            var n=arr1.length
            var i=0, j=0, k=0;
            while(i<n && j<n){
                if(arr1[i]<=arr2[j]){
                    merge[k]=arr1[i]
                    i+=1
                    k+=1
                }else {
                    merge[k]=arr2[j]
                    j+=1
                    k+=1
                }
            }
            while(i<n){
                merge[k]=arr1[i]
                i+=1
                k+=1
            }
            while(j<n){
                merge[k]=arr2[j]
                j+=1
                k+=1
            }
            var median=(merge[n-1]+merge[n])/2
            console.log(median)
    }
   )([1, 12, 15, 26, 38],[2, 13, 17, 30, 45])

//g.Remove duplicates from an array

   //anonymous function
   var anonymousStr=function(str){
    var ans=[]
    str.forEach(element => {
        if(!ans.includes(element)){
            ans.push(element)
        }
    });
    console.log(ans)
   }
   anonymousStr(["apple", "mango","apple", "orange", "mango", "mango"])

   //IIFE
   (
    function(str){
        var ans=[]
    str.forEach(element => {
        if(!ans.includes(element)){
            ans.push(element)
        }
    });
    console.log(ans)
    }
   )(["apple", "mango","apple", "orange", "mango", "mango"])

//h.Rotate an array by k times

   //anonymous function
   var anonymousRotate=function(arr,n){
    for(var i=0;i<n;i++){
        var x=arr.pop()
        arr.unshift(x)
    }
    console.log(arr)
   }
   anonymousRotate([1,2,3,4,5],3)

   //IIFE
   (
    function(arr,n){
        for(var i=0;i<n;i++){
            var x=arr.pop()
            arr.unshift(x)
        }
        console.log(arr)
    }
   )([1,2,3,4,5],3)