(()=>{"use strict";const e=function(){const e=document.querySelector("#content");if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("h1");t.textContent="Jack in the Box";const n=document.createElement("img");n.src="/dist/images/VegNews.JackInTheBox.PlantbasedUnChicken.jpg";const c=document.createElement("h3");c.textContent="Vegetarian Chicken",e.appendChild(t),e.appendChild(n),e.appendChild(c)};document.querySelectorAll('input[name="tab"]').forEach((t=>t.addEventListener("click",(t=>{console.log(t),console.log(t.target.id);const n=t.target.id;"veggie-chicken"===n?e():"tacos"===n?function(){const e=document.querySelector("#content");if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("h1");t.textContent="Jack in the Box";const n=document.createElement("img");n.src="/dist/images/tacos.jpg";const c=document.createElement("h3");c.textContent="Tacos",e.appendChild(t),e.appendChild(n),e.appendChild(c)}():function(){const e=document.querySelector("#content");if(e.hasChildNodes())for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("h1");t.textContent="Jack in the Box";const n=document.createElement("img");n.src="/dist/images/milkshake.jpg";const c=document.createElement("h3");c.textContent="Milkshake",e.appendChild(t),e.appendChild(n),e.appendChild(c)}()})))),e()})();