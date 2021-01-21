// Creo un array di oggetti di icone:
const icons = [
  {name: 'cat', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'horse', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'dog', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'dragon', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'lemon', prefisso: 'fa', type: 'fruit', family: 'fas'},
  {name: 'carrot', prefisso: 'fa', type: 'fruit', family: 'fas'},
  {name: 'user-ninja', prefisso: 'fa', type: 'human', family: 'fas'},
  {name: 'user-graduate', prefisso: 'fa', type: 'human', family: 'fas'},
]
// Creo un array di colori che dovrò abbinare ai vari types dell'array di oggetti di icone:
const colors = ['orange', 'blue', 'green'];

const types = []
// Attraverso dei cicli forEach inserisco un nuovo chiave-valore (color) al mio array di oggetti di icone:
icons.forEach((element, i) => {
  if (!types.includes(element.type)) {
    types.push(element.type);
  }
});
icons.forEach((element, i) => {
  const typeIndex = types.indexOf(element.type)

  if (typeIndex !== -1) {
    element.color = colors[typeIndex];
  }
});
// Stampo nell'HTML il mio array di oggetti di icone. Le icone saranno colorate diversamente in base al loro type:
const appContainer = document.getElementById('container');

icons.forEach((element) => {

  const {name, prefisso, family, type, color} = element
  appContainer.innerHTML += `
  <div>
    <i class="${family} ${prefisso}-${name}" style="color:${color}"></i>
    ${type}
  </div>
  `
});
