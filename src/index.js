import loadVeggieChicken from './pages/veggieChicken';
import loadTacos from './pages/tacos';
import loadMilkShake from './pages/milkShake';

const tabs = document.querySelectorAll('input[name="tab"]');

tabs.forEach(tab =>
  tab.addEventListener('click', e => {
    console.log(e);
    console.log(e.target.id);
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
