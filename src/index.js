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
            if (!url.searchParams.has("utm_medium")) {
              url.searchParams.set("utm_medium", "twa");
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
      }

      document.addEventListener("DOMContentLoaded", init);

      return {
        isTWA,
        showAfter,
        showReviewDialog,
        hideReviewDialog,
        setTheme,
      };
    })();
