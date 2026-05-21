const products = [

  {
    name:"Quả Bóng Rổ Step Back Newbee",
    size:"bóng rổ",
    price:"290.000đ",
    image:"images/qua-bong-ro-stepback-newbee-vang-2.jpg"
  },

  {
    name:"Quả Bóng Rổ Step Back Newbee",
    size:"bóng rổ",
    price:"290.000đ",
    image:"images/qua-bong-ro-stepback-newbee-vang-1.jpg"
  },

  {
    
  }

];

const productsDiv =
document.getElementById("products");

function renderProducts(data){

  productsDiv.innerHTML = "";

  data.forEach(product=>{

    productsDiv.innerHTML += `

      <div class="card">

        <img src="${product.image}">

        <div class="card-content">

          <h3>${product.name}</h3>

          <div class="price">
            ${product.price}
          </div>

          <p>Size: ${product.size}</p>

        </div>

      </div>

    `;
  });
}

renderProducts(products);

function filterProducts(size){

  if(size === 'all'){
    renderProducts(products);
    return;
  }

  const filtered =
  products.filter(p => p.size == size);

  renderProducts(filtered);
}