let suma = 0;
let kil = 0;

let yu = true;



while(yu == true){
suma = suma + Number (prompt(`відіть ціну товара`));
kil++;
yu = confirm(`ви будете ще щьос покупати`) ;
}
console.log(`ви пртдбали ${kil} товарів на загальну вартість ${suma}`)