const products = [

  {
    name:"Nike Elite Đen",
    size:40,
    price:"890.000đ",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },

  {
    name:"Nike Elite Hồng",
    size:39,
    price:"920.000đ",
    image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },

  {
    name:"Nike Elite Xám",
    size:41,
    price:"950.000đ",
    image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
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