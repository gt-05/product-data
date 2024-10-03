const produtos = [
    {
        "id": 1,
        "name": "Coca-Cola 2L",
        "price": 7.50,
        "discountPrice": 0.00,
        "discount": 20,
        "category": "Bebidas"
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S21",
        "price": 3500.00,
        "discountPrice": 0.00,
        "discount": 8.57,
        "category": "Eletrônicos"
    },
    {
        "id": 3,
        "name": "Nivea Creme",
        "price": 25.00,
        "discountPrice": 0.00,
        "discount": 20,
        "category": "Higiene Pessoal"
    },
    {
        "id": 4,
        "name": "Nike Air Max",
        "price": 600.00,
        "discountPrice": 0.00,
        "discount": 10,
        "category": "Calçados"
    },
    {
        "id": 5,
        "name": "Omo Lavagem Perfeita",
        "price": 30.00,
        "discountPrice": 5.00,
        "discount": 16.67,
        "category": "Limpeza"
    },
    {
        "id": 6,
        "name": "Nutella 350g",
        "price": 25.00,
        "discountPrice": 0.00,
        "discount": 12,
        "category": "Alimentos"
    },
    {
        "id": 7,
        "name": "Lego Star Wars",
        "price": 400.00,
        "discountPrice": 0.00,
        "discount": 12.5,
        "category": "Brinquedos"
    },
    {
        "id": 8,
        "name": "Kindle Paperwhite",
        "price": 800.00,
        "discountPrice": 0.00,
        "discount": 12.5,
        "category": "Tecnologia"
    },
    {
        "id": 9,
        "name": "Adidas Ultraboost",
        "price": 650.00,
        "discountPrice": 0.00,
        "discount": 10,
        "category": "Calçados"
    },
    {
        "id": 10,
        "name": "Chanel No. 5",
        "price": 1200.00,
        "discountPrice": 0.00,
        "discount": 10,
        "category": "Perfumes"
    }
]

//2
function aplicarDesconto(produtos) {
    const produtosComDesconto = [];

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        const descontoAplicado = produto.price * (produto.discount / 100);
        const novoPreco = produto.price - descontoAplicado;

        produtosComDesconto.push({
            id: produto.id,
            name: produto.name,
            price: produto.price,
            discount: produto.discount,
            category: produto.category,
            discountPrice: novoPreco.toFixed(2)
        });
    }

    return produtosComDesconto;
}
const produtosComDesconto = aplicarDesconto(produtos);
console.log(produtosComDesconto);

//3
function recebeCategoria(produtos, category) {
    
    const resultado = [];
    for(let i = 0; i < produtos.length; i++){
        if (produtos[i].category === category) {
            resultado.push(produtos[i]);
    } 
}
    return resultado;
}
const teste = recebeCategoria(produtos, "Calçados")
console.log(teste);

//4
function buscarProdutosPorNome(produtos, termo) {
    const produtosEncontrados = [];

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        if (produto.name.toLowerCase().includes(termo.toLowerCase())) {
            produtosEncontrados.push(produto);
        }
    }

    return produtosEncontrados;
}

const resultado = buscarProdutosPorNome(produtos, "coca");
console.log(resultado);

//5
function totalPreco(produtos) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].price;
    }
    return total;
}

console.log("Total de Preços:", totalPreco(produtos));

//6
function produtosOrdenadosPorPreco(produtos) {
    const produtosOrdenados = [...produtos]; 
    const n = produtosOrdenados.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (produtosOrdenados[j].price > produtosOrdenados[j + 1].price) {
                
                const temp = produtosOrdenados[j];
                produtosOrdenados[j] = produtosOrdenados[j + 1];
                produtosOrdenados[j + 1] = temp;
            }
        }
    }
    return produtosOrdenados;
}

console.log("Produtos Ordenados por Preço:", produtosOrdenadosPorPreco(produtos));
//
//7
function temDesconto(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].discount > 0) {
            return true;
        }
    }
    return false;
}

console.log("Tem Desconto?", temDesconto(produtos));

//8
function todosPrecosAcimaDe100(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].price <= 100) {
            return false; 
        }
    }
    return true; 
}

console.log("Todos Preços Acima de 100?", todosPrecosAcimaDe100(produtos));

//