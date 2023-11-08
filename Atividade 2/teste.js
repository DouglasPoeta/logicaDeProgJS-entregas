
const pessoa =  [
    { doc: '19660156627897' , nome: 'Fernanda Santos' },
    { doc: '23998058019370', nome: 'Rafael Souza' },
    { doc: '92291338611', nome: 'Maria Silva' },
    { doc: '55443795656', nome: 'Maria Souza' },
    { doc: '77743761456', nome: 'Ana Costa' },
    { doc: '47202302326', nome: 'Maria Ferreira' },
    { doc: '58017232567', nome: 'Sofia Costa' },
    { doc: '16733009491247', nome: 'Lucas Silva' },
    { doc: '63351859919', nome: 'Rafael Souza' },
    { doc: '84297701780', nome: 'Carlos Oliveira' }
];


const    parceirosAgrupados = {
    pessoaJuridica:[],
    pessoaFisica: [] 
}

pessoa.forEach((pessoa)  => {
    
    if (pessoa.doc.length > 11) {
       parceirosAgrupados.pessoaJuridica.push( {parceirosId: pessoa.doc, nome: pessoa.nome  });
             
    } else {
        parceirosAgrupados.pessoaFisica.push( {parceirosId: pessoa.doc , nome:pessoa.nome});
          
    }
 });
 
 
console.log(parceirosAgrupados);
 