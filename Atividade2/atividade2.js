let par=0
let impar=0
for(let i=0;i<10;i++){
  let  numero=prompt('Type ten numbers: ')
  let  numeros = Number(numero)
    if(numeros%2==0){
        par++
        
     }
      

    else{
        impar++

    }
}
    
    document.write(`Os números pares foram: ${par}<br> e os ímpares: ${impar}<br> `)
    
