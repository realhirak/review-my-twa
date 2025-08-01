var ReviewMyTWA=(()=>{var P=(()=>{function S(){let t=`
         @import url(https://fonts.googleapis.com/css2?family=Product+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap);.rtwa-header,.rtwa-popup{color:#111827;background-color:#fff}.rtwa-content,.rtwa-header,.rtwa-popup{background-color:#fff}.rtwa-popup{font-family:'Product Sans',Arial,sans-serif;width:100%;max-width:768px;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgb(0 0 0 / .05);overflow:hidden;position:fixed;bottom:0;padding-bottom:10px;left:50%;transform:translateX(-50%);z-index:99999}.rtwa-header{border-bottom:1px solid #e5e7eb;padding:14px 16px;display:flex;justify-content:space-between;align-items:center}.rtwa-header-left,.rtwa-header-right{display:flex;align-items:center;gap:8px}.rtwa-header-left img,.rtwa-header-right img{width:24px;height:24px;object-fit:contain}.rtwa-header-right img{width:32px;height:32px;border-radius:9999px}.rtwa-header-left span{color:#4b5563;font-size:1.3rem;font-weight:400}.rtwa-header-right span{color:#111827;font-weight:400;font-size:1rem}.rtwa-content{padding:12px 16px;color:#111827}.rtwa-app-info{display:flex;align-items:center;gap:12px;margin-bottom:4px}.rtwa-app-icon{width:40px;height:40px;background-color:#8080801a;border-radius:8px;object-fit:contain}.rtwa-app-text{max-width:400px}.rtwa-app-text p:first-child{font-weight:500;color:#111827;font-size:1.1rem;line-height:1.25rem;margin:0}.rtwa-app-text p:last-child{font-weight:400;color:#6b7280;font-size:.95rem;line-height:1rem;margin:0;padding:6px 0 4px}.rtwa-stars{display:flex;gap:12px;margin:23px 0 30px}@media (min-width:40rem){.rtwa-popup{border-radius:10px;bottom:1rem;padding-bottom:5px;max-width:400px;left:auto;right:1rem;transform:none}.rtwa-stars{margin:14px 0 20px}}.rtwa-star-button{background:0 0;border:none;cursor:pointer;padding:0;line-height:1;width:40px;height:40px;stroke:#c3c6cc;transition:fill .2s}.rtwa-star-button svg{width:100%;height:100%;display:block}.rtwa-actions{display:flex;gap:16px}.rtwa-btn{flex:1;padding:10px 0;font-weight:600;font-size:.875rem;border-radius:.375rem;cursor:pointer;border:1px solid transparent;transition:background-color .2s}.rtwa-btn-cancel{border-color:#d1d5db;color:#047857;background-color:#fff}.rtwa-btn-cancel:hover{background-color:#e3fff0}.rtwa-btn-submit{background-color:#047857;color:#fff;border-color:#047857}.rtwa-btn-submit:hover{background-color:#065f46;border-color:#065f46}.rtwa-dark .rtwa-header,.rtwa-dark .rtwa-popup{border-color:#374151;color:#d1d5db;background-color:#1e1e1e}.text-center{text-align:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.select-none{user-select:none}.rtwa-popup-backdrop{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:9999}.rtwa-dark .rtwa-popup{box-shadow:0 1px 4px rgb(0 0 0 / .7)}.rtwa-dark .rtwa-app-text p:last-child,.rtwa-dark .rtwa-header-left span{color:#9ca3af}.rtwa-dark .rtwa-app-text p:first-child,.rtwa-dark .rtwa-header-right span{color:#d1d5db}.rtwa-dark .rtwa-content{background-color:#1e1e1e;color:#d1d5db}.rtwa-dark .rtwa-app-icon{background-color:#0000003d}.rtwa-dark .rtwa-star-button svg{stroke:#6b7280}.rtwa-dark .rtwa-btn-cancel{border-color:#4b5563;color:#34d399;background-color:#1e1e1e}.rtwa-dark .rtwa-btn-cancel:hover{background-color:#27272a}.rtwa-dark .rtwa-btn-submit{background-color:#059669;border-color:#059669;color:#fff}.rtwa-dark .rtwa-btn-submit:hover{background-color:#047857;border-color:#047857}.rtwa-dark .rtwa-popup-backdrop{background-color:rgba(0,0,0,.6)}
        `,e=document.createElement("style");e.setAttribute("id","rtwa-styles"),e.textContent=t,document.head.appendChild(e)}function A(){if(document.querySelector(".rtwa-popup-backdrop"))return;let t=`
    <div class="rtwa-popup-backdrop" aria-hidden="true">

    <div class="rtwa-popup" role="dialog" aria-modal="true" aria-labelledby="popupTitle">
      <div class="rtwa-header">
        <div class="rtwa-header-left pointer-events-none select-none">
          <img src="visual-identity_logos_880x572-3.width-1440.format-webp.webp" alt="Google Play logo" width="24"
            height="24" />
          <span>Google Play</span>
        </div>

      </div>
      <div class="rtwa-content">
        <div class="rtwa-app-info pointer-events-none select-none">
          <img
            src="https://play-lh.googleusercontent.com/8Nu3gtUhArD8efOANJTSAyo9vuM_ZxRHENwHPmgFlVp2bgAzqJyhWpF-jLPF99I2LOao=w480-h960-rw"
            alt="App icon" class="rtwa-app-icon" width="40" height="40" />
          <div class="rtwa-app-text">
            <p id="rtwa-app-title-text">Instagram</p>
            <p id="rtwa-app-desc-text">Enjoying this app? Rate and help us improve with a review.
            </p>
          </div>
        </div>


        <div class="rtwa-stars text-center justify-center" role="radiogroup" aria-label="Star rating">
          <button aria-label="Star 1" class="rtwa-star-button" type="button" tabindex="0" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
              aria-hidden="true" focusable="false">
              <polygon
                points="12 17.27 18.18 21 15.64 13.97 21 9.24 13.81 8.63 12 2 10.19 8.63 3 9.24 8.36 13.97 5.82 21 12 17.27" />
            </svg>
          </button>
          <button aria-label="Star 2" class="rtwa-star-button" type="button" tabindex="0" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
              aria-hidden="true" focusable="false">
              <polygon
                points="12 17.27 18.18 21 15.64 13.97 21 9.24 13.81 8.63 12 2 10.19 8.63 3 9.24 8.36 13.97 5.82 21 12 17.27" />
            </svg>
          </button>
          <button aria-label="Star 3" class="rtwa-star-button" type="button" tabindex="0" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
              aria-hidden="true" focusable="false">
              <polygon
                points="12 17.27 18.18 21 15.64 13.97 21 9.24 13.81 8.63 12 2 10.19 8.63 3 9.24 8.36 13.97 5.82 21 12 17.27" />
            </svg>
          </button>
          <button aria-label="Star 4" class="rtwa-star-button" type="button" tabindex="0" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
              aria-hidden="true" focusable="false">
              <polygon
                points="12 17.27 18.18 21 15.64 13.97 21 9.24 13.81 8.63 12 2 10.19 8.63 3 9.24 8.36 13.97 5.82 21 12 17.27" />
            </svg>
          </button>
          <button aria-label="Star 5" class="rtwa-star-button" type="button" tabindex="0" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
              aria-hidden="true" focusable="false">
              <polygon
                points="12 17.27 18.18 21 15.64 13.97 21 9.24 13.81 8.63 12 2 10.19 8.63 3 9.24 8.36 13.97 5.82 21 12 17.27" />
            </svg>
          </button>
        </div>
        <div class="rtwa-actions select-none">
          <button id="rtwa-later-text" class="rtwa-btn rtwa-btn-cancel" type="button">Maybe later</button>
          <button id="rtwa-review-text" class="rtwa-btn rtwa-btn-submit" type="submit">Review</button>
        </div>
      </div>
    </div>
  </div>
  `,e=document.createElement("div");e.innerHTML=t,document.body.appendChild(e)}S(),A();let l="system",w=!1;function f(t="system"){l=t;let e=document.querySelector(".rtwa-popup-backdrop");e&&(e.classList.remove("rtwa-dark"),l==="dark"?e.classList.add("rtwa-dark"):l==="system"&&(h(e),w||(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{h(e)}),w=!0)))}function h(t){window.matchMedia("(prefers-color-scheme: dark)").matches?t.classList.add("rtwa-dark"):t.classList.remove("rtwa-dark")}f("system");let b=3,n=!1,d=b,o=null;async function L(){try{o=(await(await fetch("/.well-known/assetlinks.json")).json())?.[0]?.target?.package_name||null}catch(t){console.warn("[ReviewMyTWA] Unable to fetch assetlinks.json for package name detection.",t)}}let s=null,c=null;async function I(){let t=["/manifest.json","/manifest.webmanifest"];for(let e of t)try{let a=await fetch(e,{credentials:"same-origin"});if(!a.ok)continue;let r=await a.json(),x=r.name||r.short_name||null,N=Array.isArray(r.icons)?r.icons:[],p=null,y=0;for(let v of N){let q=v.sizes?.split("x")[0],u=parseInt(q,10);!isNaN(u)&&u>y&&(y=u,p=v.src)}if(x&&p){s=x,c=p;return}}catch{}n=!1}function j(){if(!s||!c)return;let t=document.getElementById("rtwa-app-title-text"),e=document.querySelector(".rtwa-app-icon");t&&(t.textContent=s),e&&(e.src=c)}function T(){return typeof window<"u"&&(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)}function _(){let t=window.location.search.includes("utm_source=twa"),e=o&&document.referrer.includes(`android-app://${o}`),a=localStorage.getItem("isTWA")==="true";return t||e||a}async function E(){if(window.location.search.includes("utm_source=pwa")){n=!1;return}if(await L(),!o){n=!1;return}if(await I(),!s||!c){n=!1;return}T()&&_()?(j(),n=!0,localStorage.setItem("isTWA","true"),R()):n=!1}function m(){return n}function R(){document.querySelectorAll("a[href^='/'], a[href^='"+location.origin+"']").forEach(e=>{try{let a=new URL(e.href,location.origin);a.searchParams.has("utm_medium")||(a.searchParams.set("utm_medium","twa"),e.href=a.toString())}catch{console.warn("[ReviewMyTWA] Skipped malformed link:",e.href)}})}function g(t,e,a){let r=new Date(Date.now()+a*864e5).toUTCString();document.cookie=t+"="+encodeURIComponent(e)+"; expires="+r+"; path=/"}function C(t){return document.cookie.split("; ").reduce((e,a)=>{let r=a.split("=");return r[0]===t?decodeURIComponent(r[1]):e},"")}function D(){let t="rtwa_install_date",e=localStorage.getItem(t);if(!e){let r=Date.now();return localStorage.setItem(t,r),0}let a=Date.now()-parseInt(e,10);return Math.floor(a/864e5)}function k(){let t=document.querySelector(".rtwa-popup-backdrop");t&&(t.style.display="flex")}function i(){let t=document.querySelector(".rtwa-popup-backdrop");t&&(t.style.display="none")}function M(){return!(!m()||localStorage.getItem("appReviewed")==="true"||C("maybeLaterClicked")||D()<d)}function z(){let t=document.querySelector(".rtwa-popup-backdrop");if(!t)return;t.addEventListener("click",r=>{r.target===t&&(g("maybeLaterClicked","true",7),i())}),t.querySelectorAll(".rtwa-star-button").forEach(r=>{r.addEventListener("click",()=>{localStorage.setItem("appReviewed","true"),i(),o&&(window.location.href=`https://play.google.com/store/apps/details?id=${o}`)})});let e=document.getElementById("rtwa-review-text");e&&e.addEventListener("click",()=>{localStorage.setItem("appReviewed","true"),i(),o&&(window.location.href=`https://play.google.com/store/apps/details?id=${o}`)});let a=document.getElementById("rtwa-later-text");a&&a.addEventListener("click",()=>{g("maybeLaterClicked","true",7),i()})}function W(t){let e=parseInt(t,10);!isNaN(e)&&e>=1&&e<=90?d=e:d=b}async function B(){await E(),M()&&k(),z()}return document.addEventListener("DOMContentLoaded",B),{isTWA:m,showAfter:W,showReviewDialog:k,hideReviewDialog:i,setTheme:f}})();})();
