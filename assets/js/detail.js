import products from "./products.js";
import cart from "./cart.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');


const loadTemplate = () =>{
     fetch('/cartPerfida.html')
     .then(response => response.text())
     .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
     })
}

loadTemplate();


const initApp = () => {
    let idProduct = new  URLSearchParams(window.location.search).get('id');
    let info = products.filter((value) => value.id == idProduct)[0];
    console.log(info);
    if(!info){
        window.location.href='/cartPerfida.html';
    }
    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src =info.image;
    detail.querySelector('.name').innerText = info.name;
    detail.querySelector('.price').innerText = 'S/.'+info.price;
    detail.querySelector('.description').innerText = info.description;
    detail.querySelector('.addCart').dataset.id = idProduct;




}

