
const products = [
    {
        "id": 1,
        "name": "Camiseta Básica",
        "price": 29.90,
        "discountPrice": 0.00,
        "discount": 15.0,
        "category": "Roupas"
    },
    {
        "id": 2,
        "name": "Tênis Esportivo",
        "price": 199.90,
        "discountPrice": 0.00,
        "discount": 20.0,
        "category": "Calçados"
    },
    {
        "id": 3,
        "name": "Relógio Analógico",
        "price": 299.90,
        "discountPrice": 0.00,
        "discount": 25.0,
        "category": "Acessórios"
    },
    {
        "id": 4,
        "name": "Mochila Escolar",
        "price": 89.90,
        "discountPrice": 0.00,
        "discount": 10.0,
        "category": "Acessórios"
    },
    {
        "id": 5,
        "name": "Smartphone X",
        "price": 2999.90,
        "discountPrice": 0.00,
        "discount": 30.0,
        "category": "Eletrônicos"
    },
    {
        "id": 6,
        "name": "Fone de Ouvido Sem Fio",
        "price": 199.90,
        "discountPrice": 0.00,
        "discount": 5.0,
        "category": "Eletrônicos"
    },
    {
        "id": 7,
        "name": "Conjunto de Panelas",
        "price": 399.90,
        "discountPrice": 0.00,
        "discount": 40.0,
        "category": "Utensílios"
    },
    {
        "id": 8,
        "name": "Cadeira Ergonomica",
        "price": 599.90,
        "discountPrice": 0.00,
        "discount": 35.0,
        "category": "Móveis"
    },
    {
        "id": 9,
        "name": "Livro de Programação",
        "price": 49.90,
        "discountPrice": 0.00,
        "discount": 12.0,
        "category": "Livros"
    },
    {
        "id": 10,
        "name": "Cafeteira Elétrica",
        "price": 199.90,
        "discountPrice": 0.00,
        "discount": 18.0,
        "category": "Eletrodomésticos"
    }
]


function aplicarDesconto(products) {
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
let produtosDescontado = aplicarDesconto(products);
console.log(produtosDescontado);
