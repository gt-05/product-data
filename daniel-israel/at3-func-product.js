function filtrarProdutosPorCartegoria(produtos, categoria) {
    const produtosFiltrados = [];
    for (let index = 0; index < produtos.length; index++) {
      if (produtos[index].category === categoria){
        produtosFiltrados.push(produtos[index]);
      }
    }
    return produtosFiltrados;
  
  }

  
  const produtosEletrônicos = filtrarProdutosPorCartegoria(produtos, "Acessórios");
  console.log(produtosEletrônicos)
  