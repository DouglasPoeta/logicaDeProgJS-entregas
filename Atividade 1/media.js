function multiplicaArray(numEstrelas, avaliacao){
    if(numEstrelas.length !== avaliacao.length ){
        return null;
    }
    
    var resultado = [];
    for(var i = 0; i < numEstrelas.length; i++){
         resultado.push(numEstrelas[i] * avaliacao[i]);
    }
    return resultado;
}

var numClientes = 100;

function calculaMedia(array){
    var soma = 0;
    for(var i = 0; i < array.length; i++){
          soma += array[i];
    }
    var media = soma/numClientes;
    return media
}

function obterValores() {
    var arrayAvaliacao = [];   

    for (var i = 1; i <= 5; i++) {
        var inputId = "input" + i;
        var valor = document.getElementById(inputId).value;
        arrayAvaliacao.push(valor);  
    }
    
    var arrayEstrelas = [1,2,3,4,5];
    
    
    var result = multiplicaArray(arrayEstrelas,arrayAvaliacao);
    
    
    var mediaFinal = calculaMedia(result);
     
     
    var mediaFinalElement = document.getElementById("mediaFinal");

    mediaFinalElement.textContent = mediaFinal;  
 
}
    
    
 

