function placeOrder(Callback) {
    console.log("payment is in progress....");
    setTimeout(()=>{
        console.log("order placed successfully");
        Callback();
    },3000)
}
function preparingOrder(Callback){
    console.log("order is being prepared");
    setTimeout(()=>{
        console.log("order is ready");
        Callback();
    },3000);
}
function pickupOrder(){
    console.log("order is out for delivery");
    setTimeout(()=>{
        console.log("order delivered");
        
    },3000);
}
placeOrder(()=>{
  preparingOrder(()=>{
    pickupOrder();
  });
});
