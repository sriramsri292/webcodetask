const apiUrl = 'https://makeup-api.herokuapp.com/api/v1';

async function getMakeupProducts() {
  try {
    const response = await fetch(`${apiUrl}/products.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch makeup products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // Handle error here
  }
}

function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'product';

  const brandElement = document.createElement('div');
  brandElement.className = 'brand';
  brandElement.textContent = product.brand;

  const nameElement = document.createElement('div');
  nameElement.className = 'name';
  nameElement.textContent = product.name;

  const priceElement = document.createElement('div');
  priceElement.className = 'price';
  priceElement.textContent = `Price: ${product.price}`;

  const imageElement = document.createElement('img');
  imageElement.className = 'image';
  imageElement.src = product.image_link;

  const descriptionElement = document.createElement('div');
  descriptionElement.className = 'description';
  descriptionElement.textContent = product.description;

  productElement.appendChild(brandElement);
  productElement.appendChild(nameElement);
  productElement.appendChild(priceElement);
  productElement.appendChild(imageElement);
  productElement.appendChild(descriptionElement);

  return productElement;
}

async function displayMakeupProducts() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const products = await getMakeupProducts();
  products.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}


displayMakeupProducts();
