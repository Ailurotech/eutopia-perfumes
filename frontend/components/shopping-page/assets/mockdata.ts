const fs = require("fs"); // 引入文件系统模块

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPrice() {
  const min = 0;
  const max = 200;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomProducts(num) {
  const tags = ["For-Him", "For-Her", "Neutral"];
  const productTypes = ["Chanel", "Zara", "TomFord", "Dior", "JoMalone"];
  const weightMLs = [100, 120, 150];
  const weightOZs = [3.4, 3.8, 4.2];

  const products = [];

  for (let i = 0; i < num; i++) {
    const product = {
      description: `Test Description ${i + 1}`,
      image:
        "https://cdn.shopify.com/s/files/1/0677/1513/7714/files/Rectangle1142.png?v=1728965960",
      maxPrice: getRandomPrice(),
      minPrice: getRandomPrice(),
      title: `Armaf Passion ${i + 1}`,
      tag: getRandomElement(tags),
      productType: getRandomElement(productTypes),
      weightML: getRandomElement(weightMLs),
      weightOZ: getRandomElement(weightOZs),
    };

    // Ensure minPrice is less than or equal to maxPrice
    if (product.minPrice > product.maxPrice) {
      product.minPrice = product.maxPrice; // Set minPrice equal to maxPrice if it's higher
    }

    products.push(product);
  }

  return products;
}

// Generate 100 random products
const randomProducts = generateRandomProducts(135);

// Write the results to mockdata.json
fs.writeFile(
  "frontend/components/shopping-page/assets/mockdata.json",
  JSON.stringify(randomProducts, null, 2),
  (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("Data successfully written to mockdata.json");
    }
  }
);
