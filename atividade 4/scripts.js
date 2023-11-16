
let peso = Number(prompt('Qual seu peso?'));
let alturaNaoFormatada = prompt('Qual sua altura?');

let altura = parseFloat(alturaNaoFormatada.replace(',', '.'));
  
const IMC = peso / (altura * altura);

if(IMC < 18.5){
    console.log("Abaixo do peso");

}else if(IMC >= 18.5 && IMC <= 24.99  ){
    console.log("Peso normal");

}else if(IMC >= 25 && IMC < 29.99){
    console.log("Sobrepeso"); 
    
}else {
    console.log("Obesidade");

}