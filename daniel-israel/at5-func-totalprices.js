
// 5. Criar uma função que recebe uma array de produtos e devolve o total de preço somado de todos os produtos

let somandoTodosProdutos = () =>{
    let total = 0;
    for(let index = 0; index < produtos.length; index++){
        total += produtos[index].price;
    };

    console.log(total);
    return total;
    

};

somandoTodosProdutos();

