const ReviewMyTWA = (() => {
  function injectRTWAStyles() {
        const css = `
         @import url(https://fonts.googleapis.com/css2?family=Product+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap);.rtwa-header,.rtwa-popup{color:#111827;background-color:#fff}.rtwa-content,.rtwa-header,.rtwa-popup{background-color:#fff}.rtwa-popup{font-family:'Product Sans',Arial,sans-serif;width:100%;max-width:768px;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgb(0 0 0 / .05);overflow:hidden;position:fixed;bottom:0;padding-bottom:10px;left:50%;transform:translateX(-50%);z-index:99999}.rtwa-header{border-bottom:1px solid #e5e7eb;padding:14px 16px;display:flex;justify-content:space-between;align-items:center}.rtwa-header-left,.rtwa-header-right{display:flex;align-items:center;gap:8px}.rtwa-header-left img,.rtwa-header-right img{width:24px;height:24px;object-fit:contain}.rtwa-header-right img{width:32px;height:32px;border-radius:9999px}.rtwa-header-left span{color:#4b5563;font-size:1.3rem;font-weight:400}.rtwa-header-right span{color:#111827;font-weight:400;font-size:1rem}.rtwa-content{padding:12px 16px;color:#111827}.rtwa-app-info{display:flex;align-items:center;gap:12px;margin-bottom:4px}.rtwa-app-icon{width:40px;height:40px;background-color:#8080801a;border-radius:8px;object-fit:contain}.rtwa-app-text{max-width:400px}.rtwa-app-text p:first-child{font-weight:500;color:#111827;font-size:1.1rem;line-height:1.25rem;margin:0}.rtwa-app-text p:last-child{font-weight:400;color:#6b7280;font-size:.95rem;line-height:1rem;margin:0;padding:6px 0 4px}.rtwa-stars{display:flex;gap:12px;margin:23px 0 30px}@media (min-width:40rem){.rtwa-popup{border-radius:10px;bottom:1rem;padding-bottom:5px;max-width:400px;left:auto;right:1rem;transform:none}.rtwa-stars{margin:14px 0 20px}}.rtwa-star-button{background:0 0;border:none;cursor:pointer;padding:0;line-height:1;width:40px;height:40px;stroke:#c3c6cc;transition:fill .2s}.rtwa-star-button svg{width:100%;height:100%;display:block}.rtwa-actions{display:flex;gap:16px}.rtwa-btn{flex:1;padding:10px 0;font-weight:600;font-size:.875rem;border-radius:.375rem;cursor:pointer;border:1px solid transparent;transition:background-color .2s}.rtwa-btn-cancel{border-color:#d1d5db;color:#047857;background-color:#fff}.rtwa-btn-cancel:hover{background-color:#e3fff0}.rtwa-btn-submit{background-color:#047857;color:#fff;border-color:#047857}.rtwa-btn-submit:hover{background-color:#065f46;border-color:#065f46}.rtwa-dark .rtwa-header,.rtwa-dark .rtwa-popup{border-color:#374151;color:#d1d5db;background-color:#1e1e1e}.text-center{text-align:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.select-none{user-select:none}.rtwa-popup-backdrop{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:9999}.rtwa-dark .rtwa-popup{box-shadow:0 1px 4px rgb(0 0 0 / .7)}.rtwa-dark .rtwa-app-text p:last-child,.rtwa-dark .rtwa-header-left span{color:#9ca3af}.rtwa-dark .rtwa-app-text p:first-child,.rtwa-dark .rtwa-header-right span{color:#d1d5db}.rtwa-dark .rtwa-content{background-color:#1e1e1e;color:#d1d5db}.rtwa-dark .rtwa-app-icon{background-color:#0000003d}.rtwa-dark .rtwa-star-button svg{stroke:#6b7280}.rtwa-dark .rtwa-btn-cancel{border-color:#4b5563;color:#34d399;background-color:#1e1e1e}.rtwa-dark .rtwa-btn-cancel:hover{background-color:#27272a}.rtwa-dark .rtwa-btn-submit{background-color:#059669;border-color:#059669;color:#fff}.rtwa-dark .rtwa-btn-submit:hover{background-color:#047857;border-color:#047857}.rtwa-dark .rtwa-popup-backdrop{background-color:rgba(0,0,0,.6)}
        `;

        const styleTag = document.createElement("style");
        styleTag.setAttribute("id", "rtwa-styles");
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
      }

      function injectRTWADialogHTML() {
        if (document.querySelector(".rtwa-popup-backdrop")) return; // Avoid duplicates

        const html = `
    <div class="rtwa-popup-backdrop" aria-hidden="true">

    <div class="rtwa-popup" role="dialog" aria-modal="true" aria-labelledby="popupTitle">
      <div class="rtwa-header">
        <div class="rtwa-header-left pointer-events-none select-none">
          <img src="data:image/webp;base64,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" alt="Google Play logo" width="24"
            height="24" />
          <span>Google Play</span>
        </div>

      </div>
      <div class="rtwa-content">
        <div class="rtwa-app-info pointer-events-none select-none">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/axkxz8AAAAASUVORK5CYII="
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
  `;

        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper);
      }

      injectRTWAStyles();
      injectRTWADialogHTML();

      let _theme = "system";
      let _systemThemeListenerSet = false;

      function setTheme(theme = "system") {
        _theme = theme;

        const backdrop = document.querySelector(".rtwa-popup-backdrop");
        if (!backdrop) return;

        backdrop.classList.remove("rtwa-dark");

        if (_theme === "dark") {
          backdrop.classList.add("rtwa-dark");
        } else if (_theme === "system") {
          applySystemTheme(backdrop);
          if (!_systemThemeListenerSet) {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
              applySystemTheme(backdrop);
            });
            _systemThemeListenerSet = true;
          }
        }
      }

      function applySystemTheme(backdrop) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          backdrop.classList.add("rtwa-dark");
        } else {
          backdrop.classList.remove("rtwa-dark");
        }
      }

      setTheme("system");

      const defaultShowAfter = 3;
      let _isTWA = false;
      let _showAfterDays = defaultShowAfter;
      let _packageName = null;

      async function fetchPackageName() {
        try {
          const res = await fetch('/.well-known/assetlinks.json');
          const json = await res.json();
          const first = json?.[0];
          _packageName = first?.target?.package_name || null;
        } catch (e) {
          console.warn('[ReviewMyTWA] Unable to fetch assetlinks.json for package name detection.', e);
        }
      }

      let _manifestName = null;
      let _manifestIcon = null;

      async function fetchManifestData() {
        const urls = ["/manifest.json", "/manifest.webmanifest"];

        for (const url of urls) {
          try {
            const response = await fetch(url, { credentials: "same-origin" });
            if (!response.ok) continue;

            const manifest = await response.json();

            const name = manifest.name || manifest.short_name || null;
            const icons = Array.isArray(manifest.icons) ? manifest.icons : [];

            // Find the icon with the highest resolution
            let largestIcon = null;
            let maxSize = 0;

            for (const icon of icons) {
              const size = icon.sizes?.split("x")[0]; // Get width from "192x192"
              const numericSize = parseInt(size, 10);

              if (!isNaN(numericSize) && numericSize > maxSize) {
                maxSize = numericSize;
                largestIcon = icon.src;
              }
            }

            if (name && largestIcon) {
              _manifestName = name;
              _manifestIcon = largestIcon;
              return; // Success — no need to try next manifest
            }
          } catch (e) {
            // Failed, try next URL
          }
        }

        // Fallback — required data not found
        _isTWA = false;
      }

      function updateAppInfoUI() {
        if (!_manifestName || !_manifestIcon) return;

        const titleEl = document.getElementById("rtwa-app-title-text");
        const iconEl = document.querySelector(".rtwa-app-icon");

        if (titleEl) titleEl.textContent = _manifestName;
        if (iconEl) iconEl.src = _manifestIcon;
      }

      function baseDetection() {
        return (
          typeof window !== "undefined" &&
          (window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true)
        );
      }

      function matchAnyTWAConditions() {
        const hasUTM = window.location.search.includes("utm_source=twa");
        const hasReferrer = _packageName && document.referrer.includes(`android-app://${_packageName}`);
        const hasLocal = localStorage.getItem("isTWA") === "true";

        return hasUTM || hasReferrer || hasLocal;
      }

      async function detectTWA() {
        if (window.location.search.includes("utm_source=pwa")) {
          _isTWA = false;
          return;
        }

        await fetchPackageName();

        if (!_packageName) {
          _isTWA = false;
          return;
        }

        await fetchManifestData();

        if (!_manifestName || !_manifestIcon) {
          _isTWA = false;
          return;
        }

        if (baseDetection() && matchAnyTWAConditions()) {
          updateAppInfoUI();
          _isTWA = true;
          localStorage.setItem("isTWA", "true");
          updateInternalLinks();
        } else {
          _isTWA = false;
        }
      }

      function isTWA() {
        return _isTWA;
      }

      function updateInternalLinks() {
        const anchors = document.querySelectorAll("a[href^='/'], a[href^='" + location.origin + "']");
        anchors.forEach(a => {
          try {
            const url = new URL(a.href, location.origin);
            if (!url.searchParams.has("utm_source")) {
              url.searchParams.set("utm_source", "twa");
              a.href = url.toString();
            }
          } catch (e) {
            console.warn('[ReviewMyTWA] Skipped malformed link:', a.href);
          }
        });
      }

      function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
      }

      function getCookie(name) {
        return document.cookie.split("; ").reduce((r, v) => {
          const parts = v.split("=");
          return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, "");
      }

      function daysSinceInstall() {
        const key = "rtwa_install_date";
        let storedDate = localStorage.getItem(key);
        if (!storedDate) {
          const now = Date.now();
          localStorage.setItem(key, now);
          return 0;
        }
        const diff = Date.now() - parseInt(storedDate, 10);
        return Math.floor(diff / 864e5);
      }

      function showReviewDialog() {
        const el = document.querySelector(".rtwa-popup-backdrop");
        if (el) el.style.display = "flex";
      }

      function hideReviewDialog() {
        const el = document.querySelector(".rtwa-popup-backdrop");
        if (el) el.style.display = "none";
      }

      function shouldShowDialog() {
        if (!isTWA()) return false;
        if (localStorage.getItem("appReviewed") === "true") return false;
        if (getCookie("maybeLaterClicked")) return false;
        if (daysSinceInstall() < _showAfterDays) return false;
        return true;
      }

      function initListeners() {
        const backdrop = document.querySelector(".rtwa-popup-backdrop");
        if (!backdrop) return;

        backdrop.addEventListener("click", (e) => {
          if (e.target === backdrop) {
            setCookie("maybeLaterClicked", "true", 7);
            hideReviewDialog();
          }
        });

        backdrop.querySelectorAll(".rtwa-star-button").forEach(btn => {
          btn.addEventListener("click", () => {
            localStorage.setItem("appReviewed", "true");
            hideReviewDialog();
            if (_packageName) {
              window.location.href = `https://play.google.com/store/apps/details?id=${_packageName}`;
            }
          });
        });

        const reviewBtn = document.getElementById("rtwa-review-text");
        if (reviewBtn) {
          reviewBtn.addEventListener("click", () => {
            localStorage.setItem("appReviewed", "true");
            hideReviewDialog();
            if (_packageName) {
              window.location.href = `https://play.google.com/store/apps/details?id=${_packageName}`;
            }
          });
        }

        const maybeLaterBtn = document.getElementById("rtwa-later-text");
        if (maybeLaterBtn) {
          maybeLaterBtn.addEventListener("click", () => {
            setCookie("maybeLaterClicked", "true", 7);
            hideReviewDialog();
          });
        }
      }

      function showAfter(days) {
        const n = parseInt(days, 10);
        if (!isNaN(n) && n >= 1 && n <= 90) {
          _showAfterDays = n;
        } else {
          _showAfterDays = defaultShowAfter;
        }
      }

      async function init() {
        await detectTWA();
        if (shouldShowDialog()) {
          showReviewDialog();
        }
        initListeners();

        setTimeout(() => {
      const readyEvent = new CustomEvent("reviewMyTwaReady");
      window.dispatchEvent(readyEvent);
      document.dispatchEvent(readyEvent);
          }, 100);
      }

    document.addEventListener("DOMContentLoaded", init);

    return {
      get isTWA() {
        return _isTWA;
      },
      showAfter,
      showReviewDialog,
      hideReviewDialog,
      setTheme,
    };
  })();
if (typeof window !== "undefined") {
  window.ReviewMyTWA = ReviewMyTWA;
}
export default ReviewMyTWA;
