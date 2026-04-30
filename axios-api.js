import"./assets/styles-DSbSV4YY.js";import{a as c}from"./assets/vendor-Do60_h77.js";const r=document.querySelector(".todo-list");c("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then(e=>{console.log(e.data),r.insertAdjacentHTML("beforeend",a(e.data))}).catch(e=>{console.log(e.message)});function a(e){return e.map(({id:t,title:o,completed:n})=>`<li data-id ="${t}" class="list-item">
    <input type="checkbox" ${n&&"checked"}/>
    <p>${o}</p>
  </li>`).join("")}document.querySelector("#search-form");const i=document.querySelector("#breeds-list");document.querySelector("#breed-input");document.querySelector("#loader");document.querySelector("#cat-card");s();function s(){c("https://api.thecatapi.com/v1/breeds").then(({data:e})=>{console.log(e),i.insertAdjacentHTML("beforeend",d(e))}).catch(e=>{console.log(e.message)})}function d(e){return e.map(({id:t,name:o})=>`<option value="${o}" data-id="${t}"></option>`).join("")}
//# sourceMappingURL=axios-api.js.map
