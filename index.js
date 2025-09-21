import{a as h,S as y,i as g}from"./assets/vendor-BNibzuFn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function b(i){return h("https://pixabay.com/api/",{params:{key:"52353734-aa83943fc4859b94495f66918",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>(console.log(s),[]))}let a;function L(i,s){const r=i.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:m,comments:f,downloads:p})=>`
    <li class="card">
      <a href="${e}" class="card-item-img">
        <img class="img" src="${l}" alt="${t}">
      </a>
      <div class="card-description">
        <ul class="desc-item">
          <li class="desk-item-name">Likes</li>
          <li class="desk-item-value">${o}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Views</li>
          <li class="desk-item-value">${m}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Comments</li>
          <li class="desk-item-value">${f}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Downloads</li>
          <li class="desk-item-value">${p}</li>
        </ul>
      </div>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function v(i){i.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function u(){document.querySelector(".loader").classList.add("hidden")}const n=document.querySelector(".form"),q=n.querySelector("input"),c=document.querySelector(".form-btn"),d=document.querySelector(".gallery");n.addEventListener("submit",$);function $(i){i.preventDefault(),c.disabled=!0;const s=q.value.trim();s&&(v(d),S(),b(s.toLowerCase()).then(r=>{if(!r.hits||r.hits.length===0){u(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.disabled=!1;return}L(r.hits,d),u(),c.disabled=!1}).catch(r=>{console.log(r)}),n.reset())}
//# sourceMappingURL=index.js.map
