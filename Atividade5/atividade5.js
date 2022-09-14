let ad = 0;
let numberText = prompt('Type a number: ');
let number = Number(numberText);

do{
   ad+=number;
   numberText = prompt('Type another number: ');
   number = Number(numberText);
}while(number!=0);

document.write(`Total is: ${ad}`);