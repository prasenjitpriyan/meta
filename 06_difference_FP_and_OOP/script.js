// Functional Programming

let shoes = 100
var stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax
}

let toPay = totalPrice(shoes, stateTax)
console.log(toPay);


// Object Oriented Programming

let purchase = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    let calculation = purchase.shoes * purchase.stateTax;
    console.log('Total Price:', calculation);
  }
}
purchase.totalPrice()

