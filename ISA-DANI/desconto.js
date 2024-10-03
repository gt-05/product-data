export function aplicarDesconto(products) {
    return products.map(product => {
        let descontoProduto = (product.price * product.discount) / 100;
        let precoFinal = product.price - descontoProduto;

        return {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            discount: product.discount,
            discountPrice: precoFinal.toFixed(2),

        }
    })
}
//let produtosDescontado = aplicarDesconto(products);
//console.log(produtosDescontado);

// export function filtrarPorCategoria(produtos, categoria) {
//     return products.filter(produto => produto.category === categoria);
// }

// const produtosFiltrados = filtrarPorCategoria("Fone de Ouvido Sem Fio", "Eletrônicos");
// console.log(produtosFiltrados);



