
import { data } from "../utils/data.js";
import { header } from "./header.js";
const contenedor = document.getElementById('post-card');
const main = document.getElementById('index-main')
const mappingData = (data) => {

  return data.map(
    (item) =>
      `
    <div class="card">
        <figure class="product-image">
            <img class="image" src="${item.image}" alt="">
        </figure>
        <div class='card-content'>
        <h2 class="title-product">${item.title}</h2>
        <p class="description">${item.description}</p>
        </div>
        <a href=${item.url} class="post-button">Ver post</a>
    </div>
    `
  );
};
const headertest = `
<header class="index-header">
<a href="./index.html">
    <img class="logo" src="./css//assets/escalab.jpg" alt="logo escalab">
</a>
<nav>
    <a class="index-nav " href="./index.html">Home</a>
    <a class="index-nav second-color" href="./blogs.html">Blogs</a>
</nav>
</header>
`  










const insertDOM = () =>{
    const template = mappingData(data);
 contenedor.innerHTML = template.join('');

};
document.body.insertBefore(header,main)
insertDOM();
