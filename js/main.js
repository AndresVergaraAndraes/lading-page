import { data } from "../utils/data.js";
const contenedor = document.getElementById('post-card');
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

const insertDOM = () =>{
    const template = mappingData(data);
    return contenedor.innerHTML = template.join(' ');
};

insertDOM();
