//initial data
let totalAmount=0;
//add 500
totalAmount += 500;
//add 1200
totalAmount+=1200;
//apply 200 discount
totalAmount-=200;
//add 18% gst
totalAmount += totalAmount*0.18
//print the final amnt
console.log("final bill amount: "+ totalAmount.toFixed(2));
