var arr=[2,43,76,11,8,23,42,12,9];
for(var i=1; i<=arr.length; i++){
    for(var j=i+1; j<=arr.length; j++){
        if(arr[i]>arr[j]){
            var temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
        }
    }
}
console.log(arr);