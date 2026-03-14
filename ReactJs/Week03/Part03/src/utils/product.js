export function generateProducts(count = 1000) {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 1000) + 1, 
      });
    }
    return products;
  }