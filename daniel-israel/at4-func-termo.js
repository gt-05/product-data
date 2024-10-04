function buscarProdutosPorNome(produtos, termoDeBusca) {
    const produtosEncontrados = [];
    
    for (let index = 0; index < produtos.length; index++) {
        const produto = produtos[index];
        
        if (produto.name.toLowerCase().includes(termoDeBusca.toLowerCase())) {
            produtosEncontrados.push(produto);
        }
    }
    
    return produtosEncontrados;
}

const resultado = buscarProdutosPorNome(produtos, 'Mochila');
console.log(resultado);