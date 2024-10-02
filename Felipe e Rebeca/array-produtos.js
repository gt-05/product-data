let produtos = [
    {
        "id": 1,
        "name": "Camiseta Básica",
        "price": 29.99,
        "discountPrice": 0.00,
        "discount": 10.0,
        "category": "Vestuário"
    },
    {
        "id": 2,
        "name": "Tênis Esportivo",
        "price": 199.99,
        "discountPrice": 0.00,
        "discount": 15.0,
        "category": "Calçados"
    },
    {
        "id": 3,
        "name": "Relógio de Pulso",
        "price": 499.99,
        "discountPrice": 0.00,
        "discount": 20.0,
        "category": "Acessórios"
    },
    {
        "id": 4,
        "name": "Mochila Escolar",
        "price": 89.99,
        "discountPrice": 0.00,
        "discount": 5.0,
        "category": "Acessórios"
    },
    {
        "id": 5,
        "name": "Smartphone",
        "price": 2999.99,
        "discountPrice": 0.00,
        "discount": 25.0,
        "category": "Eletrônicos"
    },
    {
        "id": 6,
        "name": "Fone de Ouvido Sem Fio",
        "price": 199.99,
        "discountPrice": 0.00,
        "discount": 30.0,
        "category": "Eletrônicos"
    },
    {
        "id": 7,
        "name": "Cadeira Gamer",
        "price": 799.99,
        "discountPrice": 0.00,
        "discount": 12.0,
        "category": "Móveis"
    },
    {
        "id": 8,
        "name": "Cafeteira Elétrica",
        "price": 349.99,
        "discountPrice": 0.00,
        "discount": 18.0,
        "category": "Eletrodomésticos"
    },
    {
        "id": 9,
        "name": "Notebook Gamer",
        "price": 4999.99,
        "discountPrice": 0.00,
        "discount": 10.0,
        "category": "Eletrônicos"
    },
    {
        "id": 10,
        "name": "Livro de Receitas",
        "price": 39.99,
        "discountPrice": 0.00,
        "discount": 8.0,
        "category": "Livros"
    }
]

function aplicarDesconto(produtos) {
    return produtos.map(produto => {
        const descontoAplicado = produto.price * (produto.discount / 100);
        const novoPreco = produto.price - descontoAplicado;

        return {
            id: produto.id,
            name: produto.name,
            price: produto.price,
            discountPrice: novoPreco.toFixed(2), // Arredondando para 2 casas decimais
            discount: produto.discount,
            category: produto.category
        };
    });
}
const produtosComDesconto = aplicarDesconto(produtos);
console.log(produtosComDesconto);
