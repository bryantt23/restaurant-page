function loadVeggieChicken() {
  const contentId = document.querySelector('#food');

  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  const h1 = document.createElement('h1');
  h1.textContent = 'Jack in the Box';
  const img = document.createElement('img');
  img.src = './images/veggie_chicken.jpg';

  const h3 = document.createElement('h3');
  h3.textContent = 'Vegetarian Chicken';

  contentId.appendChild(h1);
  contentId.appendChild(img);
  contentId.appendChild(h3);
}

export default loadVeggieChicken;
