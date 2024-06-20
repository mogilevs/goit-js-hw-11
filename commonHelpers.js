import{S as u,i as A}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==";function m(r,i){return fetch(`https://pixabay.com/api/?key=${r}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`)}function p(r){return r.map(({webformatURL:i,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:c})=>`<li class="item">
          <a href="${o}"><img class="image" src="${i}" alt="${s}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${e}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${t}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${a}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${c}</p>
            </li>
          </ul>
        </li>`).join("")}const h="44447356-a60fa6f4c2d7f10e895940a18",n=document.querySelector(".form"),l=document.querySelector(".list");n.addEventListener("submit",d);function d(r){l.innerHTML="";const i=r.target.elements.input.value;if(r.preventDefault(),i!==""){n.insertAdjacentHTML("afterend",'<span class="loader"></span>');const o=document.querySelector(".loader");m(h,i).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{const e=s.hits;e.length!==0?(l.insertAdjacentHTML("beforeend",p(e)),new u(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):A.show({class:"toast",position:"topRight",icon:"icon",iconUrl:f,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>{console.log(s)}).finally(()=>o.style.display="none"),n.reset()}}
//# sourceMappingURL=commonHelpers.js.map
