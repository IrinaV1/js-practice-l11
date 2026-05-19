import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as r}from"./assets/vendor-bEqFC_vW.js";const l=document.querySelector(".todo-list");r("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then(e=>{console.log(e.data),l.insertAdjacentHTML("beforeend",u(e.data))}).catch(e=>{console.log(e.message)});function u(e){return e.map(({id:t,title:c,completed:s})=>`<li data-id ="${t}" class="list-item">
      <input type="checkbox" ${s&&"checked"}/>
    <p>${c}</p>
  </li>`).join("")}const m=document.querySelector("#search-form"),i=document.querySelector("#breeds-list"),p=document.querySelector("#breed-input"),n=document.querySelector("#loader"),a=document.querySelector("#cat-card");m.addEventListener("submit",g);h();function h(){r("https://api.thecatapi.com/v1/breeds").then(({data:e})=>{console.log(e),i.insertAdjacentHTML("beforeend",f(e))}).catch(e=>{console.log(e.message)})}function f(e){return e.map(({id:t,name:c})=>`<option value="${c}" data-id="${t}"></option>`).join("")}function g(e){e.preventDefault(),a.innerHTML="";const t=p.value,c=[...i.options].find(o=>o.value.toLowerCase()===t.toLowerCase());if(!c){alert("Оберіть існуючу породу");return}const s=c.dataset.id;n.classList.remove("hidden"),r(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}`).then(({data:o})=>{if(o.length>0){const d=o[0].url;a.innerHTML=`<div class="card">
        <img src="${d}" alt="${t}" class="card-image"/>
        <div class="card-body">
        <h2 class="card-title">${t}</h2>
        </div>
        </div>`}else a.innerHTML='<p class="error-text">Зображення не знайдено</p>';console.log(o)}).catch(o=>{alert(o.message)}).finally(()=>{n.classList.add("hidden"),e.target.reset()})}
//# sourceMappingURL=axios-api.js.map
