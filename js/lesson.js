function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
    return message ('Insufficient funds!')
    }
    else if (totalPrice <= customerCredits) {
  return message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`
}


  // Change code above this line
  return message;
}



makeTransaction(3000, 5, 23000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000); 
makeTransaction(500, 10, 5000);