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

form.addEventListener('submit', handleSubmit);

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
function handleSubmit(event) {
  event.preventDefault();
  catCard.innerHTML = '';
  const myBreed = breedInput.value;
  const selectedBreed = [...breedsList.options].find(
    item => item.value.toLowerCase() === myBreed.toLowerCase()
  );
  if (!selectedBreed) {
    alert('Оберіть існуючу породу');
    return;
  }
  const breedId = selectedBreed.dataset.id;
  loader.classList.remove('hidden');

  axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(({ data }) => {
      if (data.length > 0) {
        const catImg = data[0].url;
        catCard.innerHTML = `<div class="card">
        <img src="${catImg}" alt="${myBreed}" class="card-image"/>
        <div class="card-body">
        <h2 class="card-title">${myBreed}</h2>
        </div>
        </div>`;
      } else {
        catCard.innerHTML = '<p class="error-text">Зображення не знайдено</p>';
      }

      console.log(data);
    })
    .catch(error => {
      alert(error.message);
    })
    .finally(() => {
      loader.classList.add('hidden');
      event.target.reset();
    });
}
