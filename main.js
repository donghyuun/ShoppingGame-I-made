function loadItems(){
  return fetch('cloth.json')
  .then(response => response.json())
  .then(json => json.items);
}

function displayItems(items){
  const list = document.querySelector(".list");
  list.innerHTML = items.map(item => showItems(item)).join(' ');
}

function showItems(item){
  return `<li><img src="${item.image}" alt="${item.type}">${item.type}, ${item.color}, ${item.size}</li>`
}

loadItems()
.then(items => {
  displayItems(items);
  setEventListener(items);
})
.catch(console.log);


function setEventListener(items){
  const logo = document.querySelector(".logo");
  const header = document.querySelector(".header");
  logo.addEventListener("click", () => displayItems(items));
  header.addEventListener("click", () => onButtonClick(event, items));
}

function onButtonClick(event, items){
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  const filteredArray = items.filter(item => {
    if(item[key] == value){return item;}
  });
  displayItems(filteredArray);
}