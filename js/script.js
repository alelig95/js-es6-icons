const icons = [
  {name: 'cat', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'horse', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'dog', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'dragon', prefisso: 'fa', type: 'animal', family: 'fas'},
  {name: 'lemon', prefisso: 'fa', type: 'fruit', family: 'fas'},
  {name: 'apple', prefisso: 'fa', type: 'fruit', family: 'fas'},
  {name: 'user-ninja', prefisso: 'fa', type: 'human', family: 'fas'},
  {name: 'user-graduate', prefisso: 'fa', type: 'human', family: 'fas'},
]

const appContainer = document.getElementById('container');

icons.forEach((element) => {

  const {name, prefisso, family} = element
  appContainer.innerHTML += `
  <div>
    <i class="${family} ${prefisso}-${name}"/>
  </div>
  `
});
