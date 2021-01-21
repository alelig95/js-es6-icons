const icons = [
  {name: 'cat', prefisso: 'fa-cat', type: 'animal', family: 'fas'},
  {name: 'horse', prefisso: '', type: 'animal', family: 'fas'},
  {name: 'dog', prefisso: '', type: 'animal', family: 'fas'},
  {name: 'dragon', prefisso: '', type: 'animal', family: 'fas'},
  {name: 'lemon', prefisso: '', type: 'fruit', family: 'fas'},
  {name: 'apple', prefisso: '', type: 'fruit', family: 'fas'},
  {name: 'user-ninja', prefisso: '', type: 'person', family: 'fas'},
  {name: 'user-graduate', prefisso: '', type: 'person', family: 'fas'},
]

const appContainer = document.getElementById('container');

icons.forEach((element) => {

  const {name, prefisso} = element
  appContainer.innerHTML += `
  <div>
    <i class="fas fa-cat"</i>
  </div>
  `

});
