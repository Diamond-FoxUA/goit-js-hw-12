import{a as E,S as H,i as y}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();async function g(e,t=1){try{return(await E("https://pixabay.com/api/",{params:{key:"52353734-aa83943fc4859b94495f66918",q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){return console.log(r),{hits:[],totalHits:0}}}let f;function L(e,t){const r=e.map(({webformatURL:n,largeImageURL:i,tags:s,likes:a,views:P,comments:q,downloads:k})=>`
    <li class="card">
      <a href="${i}" class="card-item-img">
        <img class="img" src="${n}" alt="${s}">
      </a>
      <div class="card-description">
        <ul class="desc-item">
          <li class="desk-item-name">Likes</li>
          <li class="desk-item-value">${a}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Views</li>
          <li class="desk-item-value">${P}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Comments</li>
          <li class="desk-item-value">${q}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Downloads</li>
          <li class="desk-item-value">${k}</li>
        </ul>
      </div>
    </li>
  `).join("");t.insertAdjacentHTML("beforeend",r),f?f.refresh():f=new H(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),t.children.length===1&&(t.children[0].style.width="360px")}function $(e){e.innerHTML=""}function w(e){e.classList.remove("hidden")}function b(e){e.classList.add("hidden")}function M(e){e.classList.remove("hidden")}function h(e){e.classList.add("hidden")}const v=document.querySelector(".form"),O=v.querySelector("input"),l=document.querySelector(".gallery"),o=document.querySelector(".more-btn"),u=document.querySelector(".loader");let m=1,c="",p=0;v.addEventListener("submit",async e=>{if(e.preventDefault(),c=O.value.trim(),!c){d("Please fill out the search field.");return}m=1,$(l),h(o),w(u);try{const{hits:t,totalHits:r}=await g(c,m);if(p=r,!t.length){d("Sorry, no images found. Please try a different search query.");return}L(t,l),S(l,p,o)}catch(t){d("Something went wrong. Please try again later."),console.error(t)}finally{b(u)}});o.addEventListener("click",async()=>{m++,o.disabled=!0,h(o),w(u);try{const{hits:e,totalHits:t}=await g(c,m);L(e,l),x(),S(l,t,o)}catch(e){d("Something went wrong. Please try again later."),console.log(e)}finally{b(u),o.disabled=!1}});function x(){const{height:e}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function d(e){y.error({message:e,position:"topRight"})}function S(e,t,r){e.children.length>=t?(h(r),y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):M(r)}
//# sourceMappingURL=index.js.map
