const data = [
    {
        id: 1,
        name: 'bouquet',
        image: './Images/bouquet.png',
        rating: 2,
        price:34
    },
    {
        id: 2,
        name: 'Lamp',
        image: './Images/lamp.jpg',
        rating: 5,
        price:104
    },
    {
        id: 3,
        name: 'Bird',
        image: './Images/bird.jpg',
        rating: 4,
        price:340
    },
    {
        id: 4,
        name: 'Chocolate Box',
        image: './Images/cho.jpg',
        rating: 4,
        price:140
    },
    {
        id: 5,
        name: 'Photo Frame',
        image: './Images/photof.jpg',
        rating: 4,
        price:100
    },
    {
        id: 6,
        name: 'Teddy',
        image: './Images/t.jpg',
        rating: 4,
        price:280
    }
  ];

 
  const body = document.getElementById('body')
  const header= document.createElement('header')
  header.innerHTML =
  ` <nav class="nav">
  <ul>
      <li id="#home">Home</li>
      <li>About</li>
      <li>Contact</li>
      <p>Cart Item: <span id="cart-item">0</span><p>
  </ul>
</nav>
  `
body.appendChild(header)

const cart = [];
  const section = document.createElement('section')
  section.classList.add('card-container')
  data.forEach(cardData => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML+= `
   <img src="${cardData.image}" alt="image">
   
     <div class="card-content">
       <h3>${cardData.name}</h3>
       <p>${cardData.price}$</p>
       <Button class="card-btn" id="${cardData.id}">Buy Now</Button>
     </div>
    `
    section.appendChild(card)
  });
  body.appendChild(section)

  const cardContents = document.querySelectorAll('.card-content');
  for (const cardContent of cardContents) {
    const btn = cardContent.querySelector('.card-btn')
    // console.log(btn)
    btn.addEventListener('click',()=>{
    const selectedItem = data.find(singleData=>singleData.id === Number(btn.id))
         if(!cart.includes(selectedItem)){
          cart.push(selectedItem)
         }
         else{
          alert('Already added!!')
         }
        //  console.log(typeof(btn.id),selectedItem)
       document.getElementById('cart-item').innerText = cart.length;
         
    })
  
  }
 
  document.querySelector('#cart-item').addEventListener('click', () => {
    document.querySelector('.card-container').style.display = 'none';
    const newSection = document.createElement('div');
    newSection.classList.add('cart-container');
    newSection.innerHTML = '';
    cart.forEach(cardData => {
        newSection.innerHTML += `
            <div class="cart-card">
                <img src="${cardData.image}" alt="image">
                <div class="card-content">
                    <h3>${cardData.name}</h3>
                    <p id="${cardData.id}">${cardData.price} $</p>
                </div>
                <div class="btn-div">
                    <button class="minus" >-</button>
                    <input type="number" class="value" value='1' />
                    <button class="plus">+</button>
                </div>
            </div>
        `;
    });
    if (document.querySelector('.cart-container')) {
      document.querySelector('.cart-container').remove();
  }
    document.body.appendChild(newSection);
    document.querySelectorAll('.cart-container .card').forEach((cardCart=>{
    cardCart.querySelector('.plus').addEventListener('click',()=>{
      const value = cardCart.querySelector('.value').value;
      const priceId = cardCart.querySelector(" p").id;
      const priceOfSelectedCart = cart.find(c=>c.id === priceId).price;
      cardCart.querySelector('.value').value = Number(value) + 1;
      cardCart.querySelector( 'p').innerText = priceOfSelectedCart*Number(cardCart.querySelector('.value').value)
      console.log(priceId, priceOfSelectedCart);
    })
    }))
      document.getElementById('#home').addEventListener('click',()=>{
      document.querySelector('.card-container').style.display = 'grid'
      document.querySelector('.cart-container').style.display = 'none'
    })
});



