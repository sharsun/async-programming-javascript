
function trackCheckOut(purchaseInfo){
    return new Promise(function (resolve,reject){

    })
}

var promise = trackCheckOut(purchaseInfo);
promise.then(function(){
    chargeCustomerWithCreditCard();
})

