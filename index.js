import"./assets/styles-DSbSV4YY.js";import{a as n,S as i,i as o}from"./assets/vendor-Do60_h77.js";const l="55630526-f44120b4f4ecc6b1cd7cfb12b",c="https://pixabay.com/api/";function p(t){return n.get(c,{params:{key:l,q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data.hits)}const r=document.querySelector(".gallery"),s=document.querySelector(".loader"),g=new i(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){const a=t.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>

        <div class="info">
          <p>Likes<span>${e.likes}</span></p>
          <p>Views <span>${e.views}</span></p>
          <p>Comments <span>${e.comments}</span></p>
          <p>Downloads <span>${e.downloads}</span></p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",a),g.refresh()}function h(){r.innerHTML=""}function u(){s.style.display="block"}function y(){s.style.display="none"}const d=document.querySelector(".form");d.addEventListener("submit",f);function f(t){t.preventDefault(),h();const a=t.target.elements["search-text"].value.trim();a&&(u(),p(a).then(e=>{if(!e.length){o.show({titleColor:"white",position:"topRight",title:"Error",backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e)}).catch(()=>{o.show({titleColor:"white",position:"topRight",title:"Error",backgroundColor:"red",messageColor:"white",message:"Something went wrong. Please try again later."})}).finally(()=>{t.target.reset(),y()}))}
//# sourceMappingURL=index.js.map
