let m3 = 0;
let multiplo3 = 0;

let numberText = prompt('Type a number: ');
let number = Number(numberText);

do{
    if(number%3==0){
        m3++;
        multiplo3+=number;
 }
    numberText = prompt('Type another number: ');
    number = Number(numberText);
}while(number!=0);

const media = multiplo3/m3;

document.write(`Média dos múltiplos de 3 é igual a: ${Math.round(media)}`)


