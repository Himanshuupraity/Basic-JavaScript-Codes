var i = 1
var esum=0
var osum=0
while(i<=10){
    if(i%2==0){
        esum+=i
        console.log("Even no-"+i);
    }
    else{
        osum+=i
        console.log("Odd no-"+i);
    }
    i++
}
console.log("Sum of even no-"+esum);
console.log("Sum of Odd no-"+osum);
console.log("Sum of Total-"+osum+esum);