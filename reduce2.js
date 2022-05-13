const lista = [
    {
        nome: 'bola',
        preco: 25
    },
    {
        nome: 'meião',
        preco: 30

    },
    {
        nome:'luva',
        preco:15
    }

]

const saldoDisp =100

function calcSaldo(saldoDisp, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index+1 );
        console.log({prev});
        console.log({current});
        return prev- current.preco;
    }, saldoDisp);
}

console.log(calcSaldo(saldoDisp,lista));