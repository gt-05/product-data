let produtos = [
    {
      id: 1,
      name: "Camiseta",
      price: 50.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Vestuário",
    },
    {
      id: 2,
      name: "Calça Jeans",
      price: 120.0,
      discountPrice: 0,
      discount: 0.25,
      category: "Vestuário",
    },
    {
      id: 3,
      name: "Tênis Esportivo",
      price: 200.0,
      discountPrice: 0,
      discount: 0.25,
      category: "Calçados",
    },
    {
      id: 4,
      name: "Relógio",
      price: 300.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Acessórios",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 1500.0,
      discountPrice: 0,
      discount: 0.13,
      category: "Eletrônicos",
    },
    {
      id: 6,
      name: "Fone de Ouvido",
      price: 150.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Eletrônicos",
    },
    {
      id: 7,
      name: "Cadeira Gamer",
      price: 600.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Mobiliário",
    },
    {
      id: 8,
      name: "Mesa de Estudo",
      price: 400.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Mobiliário",
    },
    {
      id: 9,
      name: "Câmera Digital",
      price: 1000.0,
      discountPrice: 0,
      discount: 0.2,
      category: "Fotografia",
    },
    {
      id: 10,
      name: "Livro de Programação",
      price: 60.0,
      discountPrice: 0,
      discount: 0.25,
      category: "Livros",
    },
  ];

const applyDiscont = (array) => {
    for(item of array){
        item.discountPrice = item.price - (item.price * item.discount)
    }
}

const filterByCategory = (array, category) => {
    let filteredArray = []
    for(item of array){
        if(item.category === category){
            filteredArray.push(item)
        }
    }
    return filteredArray
}

const totalAmountInStock = (array) => {
    let totalAmount = 0
    for(item of array){
        totalAmount += item.price
    }
    return totalAmount
}
  