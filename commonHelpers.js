import{S as h,i as g}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",c=document.querySelector(".form"),l=document.querySelector(".list");c.addEventListener("submit",w);const y="44447356-a60fa6f4c2d7f10e895940a18";function w(a){l.innerHTML="";const i=a.target.elements.input.value;a.preventDefault(),i!==""&&(fetch(`https://pixabay.com/api/?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{const o=s.hits;if(o.length!==0){const e=o.map(({webformatURL:r,largeImageURL:n,tags:A,likes:m,views:u,comments:f,downloads:p})=>`<li class="item">
          <a href="${n}"><img class="image" src="${r}" alt="${A}" /></a>
          <ul class="item-list">
            <li class="item-list-item">
              <h3 class="title">Likes</h3>
              <p class="value">${m}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Views</h3>
              <p class="value">${u}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Comments</h3>
              <p class="value">${f}</p>
            </li>
            <li class="item-list-item">
              <h3 class="title">Downloads</h3>
              <p class="value">${p}</p>
            </li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",e),new h(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}else g.show({class:"toast",position:"topRight",icon:"icon",iconUrl:d,iconColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>{console.log(s)}),c.reset())}
//# sourceMappingURL=commonHelpers.js.map
