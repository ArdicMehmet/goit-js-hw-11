import{S as u,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".loading"),h=document.querySelector(".searchBtn"),c=document.querySelector(".gallery"),f="https://pixabay.com/api/?",m="46048347-9d88aa79f4238f227ee13ac9b",d=document.querySelector(".searchInput");async function y(r){c.innerHTML="";const s=`${f}key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`;try{l.style.display="block";const n=await fetch(s);if(!n.ok)throw new Error(`Response status: ${n.status}`);l.style.display="none";const i=await n.json();if((i==null?void 0:i.hits.length)>0){d.value="";const e=document.createDocumentFragment();i.hits.forEach(o=>{const a=document.createElement("li");a.innerHTML=`<a href="${o.largeImageURL}">
            <img src="${o.webformatURL}" alt="${o.tags}" />
            <div class="general-likes-container">
              <div class="likes-container">
                <h3 class="likes-title">Likes</h3>
                <div class="likes">${o.likes}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Views</h3>
                <div class="likes">${o.views}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Comments</h3>
                <div class="likes">${o.comments}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Downloads</h3>
                <div class="likes">${o.downloads}</div>
              </div>
            </div>
          </a>`,e.appendChild(a)}),c.appendChild(e);const t=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,enableKeyboard:!0,loop:!0,nav:!0,close:!0,animationSpeed:250});t.on("show.simplelightbox",function(){console.log("Modal is shown")}),t.on("close.simplelightbox",function(){console.log("Modal is closed")})}else p.show({theme:"custom",icon:"fas fa-exclamation-circle",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",progressBarColor:"#B51B1B",onOpening:function(e,t){console.info("Modal is open")},onClosing:function(e,t,o){console.info("closedBy: "+o)}})}catch(n){l.style.display="none",console.error(n.message)}}h.addEventListener("click",r=>{const s=d.value.trim();s?y(s):alert("Search input cant be empty")});
//# sourceMappingURL=index.js.map
