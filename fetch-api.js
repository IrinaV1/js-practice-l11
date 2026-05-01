import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s="http://api.weatherapi.com/v1",n="e0c8a4c8ac9a4385a51161403260105",o=document.querySelector(".js-search-form"),l=document.querySelector(".js-list");o.addEventListener("submit",i);function i(t){t.preventDefault();const a=t.currentTarget.elements.city.value,r=t.currentTarget.elements.days.value;u(a,r).then(e=>{console.log(e),l.innerHTML=h(e.forecast.forecastday)}).catch(e=>console.log(e)).finally(()=>{t.target.reset()})}function u(t="",a=1){const r=new URLSearchParams({key:n,q:t,days:a,lang:"uk"});return fetch(`${s}/forecast.json?${r}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function h(t){return t.map(({date:a,day:{avgtemp_c:r,condition:{text:e,icon:c}}})=>`<li class="weather-card">
    <img src="${c}" alt="${e}" class="weather-icon"/>
    <h2 class="weather-date">${a}</h2>
    <h3 class="weather-text">${e}</h3>
    <h3 class="temperature">${r}°C</h3>
   
    </li>`).join("")}
//# sourceMappingURL=fetch-api.js.map
