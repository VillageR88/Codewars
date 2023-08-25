var customers = [0, 0, 10, 11];
var v1 = customers.findIndex((k) => k > 0);
var v2 = customers.findIndex((k, index) => k > 0 && index !== v1);
console.log(v1);
console.log(v2);





/*
for (var i = 0; 0 < customers.reduce((a, b) => a + b); i++) {
*/// customers[customers.findIndex((v) => (""+v).match(/[1-9]+\d*/g))] -= 1 , customers[customers.findIndex((v) => (""+v).match(/[1-9]+\d*/g) && (v != ("" + customers).match(/[1-9]+\d*/)))] -= 1;
/*   console.log(customers);
    console.log(customers.slice(0, customers.length).reduce((a, b) => a + b));
}
console.log(i);
//console.log(x.findIndex((i) => (""+i).match(/[1-9]+\d+/g) != parseInt((""+i).match(/[1-9]+\d+/g))));
*/