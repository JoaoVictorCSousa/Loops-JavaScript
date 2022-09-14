let idade = 0
let idade_21 = 0
let idade_50 = 0

while(idade!=-99){
    const idadeText =prompt('Type the age:\n If you wanna stop, type -99');
     idade=Number(idadeText);

    if(idade<21){
        idade_21++
    }

    if(idade>50){
        idade_50++
}
}
    document.write(`Age under than 21: ${idade_21}<br>`);
    document.write(`Age over than 50: ${idade_50}<br>`);


