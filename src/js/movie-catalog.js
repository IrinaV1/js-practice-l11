import axios from 'axios';
// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const API_KEY = '4b94f6e0712385379ad83c9d99f763be';

const container = document.querySelector('.js-movie-list');
const loadMore = document.querySelector('.js-load-more');

async function serviceMovie() {
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk0ZjZlMDcxMjM4NTM3OWFkODNjOWQ5OWY3NjNiZSIsIm5iZiI6MTc3OTIxMzA1My4wMTIsInN1YiI6IjZhMGNhMmZkYzcyNDI3YzIzMTA2OTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ASuxia0S4rqlarXtuHUnKG8AC8F2CsvgO2CZMsNNGAk',
    },
  });
  return data;
}

serviceMovie()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
