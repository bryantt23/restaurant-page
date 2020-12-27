import loadVeggieChicken from './pages/veggieChicken';
import loadTacos from './pages/tacos';
import loadMilkShake from './pages/milkShake';

const contentId = document.querySelector('#content');

const tabsy = document.createElement('div');
tabsy.setAttribute('class', 'tabsy');

const veggieChickenElement = createInputElement('veggie-chicken');
veggieChickenElement.checked = true;

const tacosElement = createInputElement('tacos');
const milkShakeElement = createInputElement('milkshake');

const veggieChickenLabel = createLabelElement(
  'veggie-chicken',
  'Vegetarian Chicken'
);
const tacosLabel = createLabelElement('tacos', 'Tacos');
const milkShakeLabel = createLabelElement('milkshake', 'Milkshake');

const foodDiv = document.createElement('div');
foodDiv.id = 'food';

function createInputElement(id) {
  const inputElement = document.createElement('input');
  inputElement.type = 'radio';
  inputElement.id = id;
  inputElement.name = 'tab';
  return inputElement;
}

function createLabelElement(forLabel, textContent) {
  const label = document.createElement('label');
  label.setAttribute('class', 'tabButton');
  label.setAttribute('for', forLabel);
  label.textContent = textContent;
  return label;
}

tabsy.appendChild(veggieChickenElement);
tabsy.appendChild(veggieChickenLabel);
tabsy.appendChild(tacosElement);
tabsy.appendChild(tacosLabel);
tabsy.appendChild(milkShakeElement);
tabsy.appendChild(milkShakeLabel);

contentId.appendChild(tabsy);
contentId.appendChild(foodDiv);

const tabs = document.querySelectorAll('input[name="tab"]');

tabs.forEach(tab =>
  tab.addEventListener('click', e => {
    const id = e.target.id;
    if (id === 'veggie-chicken') {
      loadVeggieChicken();
    } else if (id === 'tacos') {
      loadTacos();
    } else {
      loadMilkShake();
    }
  })
);

loadVeggieChicken();
