 const prompt=require('prompt-sync')();
 let i = 0;
let qndCalmas =0;
let qndNervosas=0;
let qndAgressivos=0;
let qndCalmos=0;
let qndNervosos_40=0
let qndCalmos_18=0;
 
while(i < 3){
    const idadeTexto = prompt('Escreva sua idade: ');
    const idade=Number(idadeTexto)
    console.log('Selecione o Sexo entre:\n\n')
    console.log('1 - Homem\n')
    console.log('2 - Mulher\n')
    console.log('3 - Outros\n')
    const sexoText = prompt('Escolha o sexo')
    const sexo=Number(sexoText)
    console.log('Selecione o humor entre:\n')
    console.log('1 - Homem\n')
    console.log('2 - Mulher\n')
    console.log('1 - Outros\n')

    const humorText= prompt('Selecione o humor: \n')
    const humor=Number(humorText)
   
    
    if(humor == 1){
        qndCalmas++
    }
    if(sexo ==2 && humor ==2){
        qndNervosas++

    }
    if(sexo == 1 && humor == 3)
    qndAgressivos++
}
    if(sexo==3 && humor==1){
    qndCalmos++
}
    if(humor==2 && idade>40){
    qntNervsos40++;
}
if(humor == 1 && idade <18){
    qndCalmos_18++;
}
    i++


console.log(`\nO total de pessoas calmas é ${qndCalmas}`)
console.log(`\nO total de mulheres nervosas é ${qndNervosas}`)
console.log(`'\nO total de homens agressivos é: ${qndAgressivos}`)
console.log(`\nO total de outros calmos é ${qndCalmos}`)
console.log(`\n O total de homens nervsos ${qndNervosos_40}`)
console.log(`\nQuantidade de ${qndCalmos_18}`)