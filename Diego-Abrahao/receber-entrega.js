//função que recebe um array de produtos e devolve outro array de produtos com o desconto aplicado 
function discount(produtos){
    const productDiscount = produtos.price - (produtos.price / produtos.discount)
    return productDiscount.toFixed(2); 
}
const precoDoPrimeiroProduto = discount(produtos[0]);
console.log(precoDoPrimeiroProduto);
console.log(produtos[0].price)