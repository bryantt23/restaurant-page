console.log('hello wor!');

const contentId = document.querySelector('#content');

const h1 = document.createElement('h1');
h1.textContent = 'Jack in the Box';
const img = document.createElement('img');
img.src = '/images/VegNews.JackInTheBox.PlantbasedUnChicken.jpg';

const h3 = document.createElement('h3');
h3.textContent = 'Vegetarian Chicken';

contentId.appendChild(h1);
contentId.appendChild(img);
contentId.appendChild(h3);
