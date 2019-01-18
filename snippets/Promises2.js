function chargeCustomer(){
    chargeCustomerWithCreditCard();
}

listener = trackCheckOut(purchaseInfo);
listener.on("complete",chargeCustomer);

