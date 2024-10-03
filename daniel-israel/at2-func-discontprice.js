
//2. Criar função que recebe um array de produtos e devolve outro array de produtos com o desconto aplicado na chave discountPrice. 
//A chave discount deve ser a porcentagem de desconto usado na chave para encontrar o valor da chave discountPrice


// "id": 8,
// "name": "Cafeteira Elétrica",
// "price": 349.99,
// "discountPrice": 0.00,
// "discount": 18.0,
// "category": "Eletrodomésticos"


function aplicandoDesconto(){
    for(let index = 0; index < produtos.length; index++){
        let precoDisconto = (produtos[index].price * produtos[index].discount) / 100;
        produtos[index].discountPrice = produtos[index].price - precoDisconto.toFixed(2);
    }
    console.log(produtos);
    return produtos;


};

aplicandoDesconto();




