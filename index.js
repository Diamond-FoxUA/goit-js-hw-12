import{a as E,S as k,i as h}from"./assets/vendor-BNibzuFn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();async function p(e,s=1){try{return(await E("https://pixabay.com/api/",{params:{key:"52353734-aa83943fc4859b94495f66918",q:e,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(o){return console.log(o),{hits:[],totalHits:0}}}let m;function y(e,s){const o=e.map(({webformatURL:n,largeImageURL:t,tags:i,likes:l,views:w,comments:S,downloads:q})=>`
    <li class="card">
      <a href="${t}" class="card-item-img">
        <img class="img" src="${n}" alt="${i}">
      </a>
      <div class="card-description">
        <ul class="desc-item">
          <li class="desk-item-name">Likes</li>
          <li class="desk-item-value">${l}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Views</li>
          <li class="desk-item-value">${w}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Comments</li>
          <li class="desk-item-value">${S}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Downloads</li>
          <li class="desk-item-value">${q}</li>
        </ul>
      </div>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",o),m?m.refresh():m=new k(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function $(e){e.innerHTML=""}function g(e){e.classList.remove("hidden")}function L(e){e.classList.add("hidden")}function b(e){e.classList.remove("hidden")}function f(e){e.classList.add("hidden")}const v=document.querySelector(".form"),B=v.querySelector("input");document.querySelector(".form-btn");const a=document.querySelector(".gallery"),r=document.querySelector(".more-btn"),d=document.querySelector(".loader");let u=1,c="";v.addEventListener("submit",async e=>{if(e.preventDefault(),c=B.value.trim(),!c)return;u=1,$(a),f(r),g(d);const{hits:s,totalHits:o}=await p(c,u);if(L(d),s.length===0){h.error({message:"some error",position:"topRight"});return}y(s,a),o>s.length&&b(r)});r.addEventListener("click",async()=>{u++,r.disabled=!0,f(r),g(d);const{hits:e,totalHits:s}=await p(c,u);L(d),b(r),y(e,a),a.children.length>=s&&(f(r),h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),r.disabled=!1,H()});function H(){const{height:e}=a.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
