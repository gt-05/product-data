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
  let discountedProducts = array;
  for (item of discountedProducts) {
    item.discountPrice = item.price - item.price * item.discount;
  }
  return discountedProducts;
};
// console.table(applyDiscont(produtos));

const filterByCategory = (array, category) => {
  let filteredArray = [];
  for (item of array) {
    if (item.category === category) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

const totalAmountInStock = (array) => {
  let totalAmount = 0;
  for (item of array) {
    totalAmount += item.price;
  }
  return totalAmount;
};

const searchByTerm = (array, term) => {
    let searchResults = []
    for(item of array){
        if(item.name.trim().toLowerCase().includes(term)){
            searchResults.push(item)
        }
    }
    return searchResults
}

// console.table(searchByTerm(produtos, 'Livro'))

const discountInStock = (array) => {
  thereIsADiscount = false;
  for (item of array) {
    if (item.discount > 0) {
      thereIsADiscount = true;
    }
  }
  return thereIsADiscount;
};

const compareValues = (array1, array2) => {
  let itemsDecreasing = []
  for(price of array2){
    for(item of array1){
      if(item.price == price){
        itemsDecreasing.push(item)
      }
    }
  }
  return itemsDecreasing
}

const productOrdered = (array) => {
  let itemsPrices = []

   for(item of array){
    itemsPrices.push(item.price)
   }
  return itemsPrices.sort(function(a, b){return a - b}).reverse();
}

let invertedPrices = productOrdered(produtos)
let invertedItems = compareValues(produtos, invertedPrices)

// console.table(invertedItems);



// PROTOTIPO

const biggerThanAHundred = (array) => {
  let prices = [];
  for(item of array){
    prices.push(item.price);
  }
  let lower = Math.min(... prices);
  if(lower > 49){
    return true;
  } else {
    return false;
  }
}
console.log(biggerThanAHundred(produtos));