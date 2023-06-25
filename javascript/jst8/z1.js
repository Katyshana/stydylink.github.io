
let mas1 = [];
let i = 0;
let zm =true
while(zm==true){
mas1.push( prompt( `відіть число від 1 до 10`));
zm = confirm('чи хочеш ви ведите ще числа?')
i++
} 
console.log(mas1);
mas1.sort();
console.log(mas1);
mas1.reverse();
console.log(mas1);