# product-data

# OBRIGATORIAMENTE TEM QUE SER USA OS LOOPS QUE VIMOS EM SALA COMO FOR, FOR OF, FOR IN OU WHILE

1. Array de produtos (min 10. Dica: Chat GPT)
    - id (int)
    - name
    - Price (float)
    - discountPrice (float, deve iniciar como 0)
    - discount (float)
    - category
<!-- OK -->
2. Criar função que recebe um array de produtos e devolve outro array de produtos com o desconto aplicado. A chave `discount` deve ser a porcentagem e vai ser usada na chave `price` para definir o valor do `discountPricce` <!-- OK -->

3. Criar função que recebe uma array de produtos e nome de uma categoria e devolve um outro array com apenas os produtos dessa categoria

4. Criar função que recebe um array de produtos e um termo de busca e devolve outro array com apenas os produto que tiverem o termo no nome

5. Criar uma função que recebe uma array de produtos e devolve o total de preço somado de todos os produtos

6. Criar uma função que recebe uma array de produtos e devolve ou array com os produtos ordenados pelo menor preço

7. Criar função que recebe um array de produtos e devolve true se pelo menos 1 produto tiver desconto, e false se nenhum tiver desconto

8. Criar função que recebe um array de produto e devolve true se absolutamente TODOS os produto tiverem preço maior que 100, e false se NENHUM tiver preço maior que 100

```json
[
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
```
