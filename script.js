let cardicon='<div class="cardicons"><img src="images\\favourite.svg" alt="favourites"><img src="images\\eye.svg" alt="eye"><img src="images\\network.svg" alt="network"></div>';
let cards=document.querySelectorAll('.card');
cards.forEach(x=> {
    x.innerHTML+=cardicon;
    
});