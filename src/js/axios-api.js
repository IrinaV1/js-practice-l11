import axios from 'axios';
const container = document.querySelector('.todo-list');

axios('https://jsonplaceholder.typicode.com/todos', {
  params: {
    _limit: 5,
  },
})
  .then(res => {
    console.log(res.data);
    container.insertAdjacentHTML('beforeend', createMarkup(res.data));
  })
  .catch(error => {
    console.log(error.message);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, completed }) =>
        `<li data-id ="${id}" class="list-item">
    <input type="checkbox" ${completed && 'checked'}/>
    <p>${title}</p>
  </li>`
    )
    .join('');
}

const form = document.querySelector('#search-form');
const breedsList = document.querySelector('#breeds-list');
const breedInput = document.querySelector('#breed-input');
const loader = document.querySelector('#loader');
const catCard = document.querySelector('#cat-card');

fetchBreeds();
function fetchBreeds() {
  axios('https://api.thecatapi.com/v1/breeds')
    .then(({ data }) => {
      console.log(data);
      breedsList.insertAdjacentHTML('beforeend', populateDatalist(data));
    })
    .catch(error => {
      console.log(error.message);
    });
}

function populateDatalist(arr) {
  return arr
    .map(({ id, name }) => `<option value="${name}" data-id="${id}"></option>`)
    .join('');
}
