function order_creation(id,callback){
    console.log("order creation id :"+id);
    callback();
};

function payment(payment,callback){
    console.log("payment :"+payment);
    callback();
};
function invoice(details,callback){
    console.log("invoice :"+details);
};

order_creation(101,payment);