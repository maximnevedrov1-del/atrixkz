/**
 * Cookie Consent Banner for atrixkz.kz
 * Atrix Kazakhstan - Official Distributor
 * License: MIT
 */

(function () {
  'use strict';

  // ---- Configuration ----
  const CONFIG = {
    localStorageKey: 'atrixkz_cookie_consent',
    bannerText: 'Мы используем cookies и Яндекс.Метрику для анализа трафика и улучшения работы сайта.',
    acceptBtnText: 'Принять',
    detailsBtnText: 'Подробнее',
    privacyPolicyUrl: '/privacy-policy.html',
    bannerPosition: 'bottom', // 'bottom' or 'top'
    autoHideDelay: null, // null = no auto-hide
  };

  // ---- Check if consent already given ----
  function hasConsent() {
    try {
      return localStorage.getItem(CONFIG.localStorageKey) === 'accepted';
    } catch (e) {
      return false;
    }
  }

  function saveConsent() {
    try {
      localStorage.setItem(CONFIG.localStorageKey, 'accepted');
      localStorage.setItem(CONFIG.localStorageKey + '_date', new Date().toISOString());
    } catch (e) {
      // localStorage not available
    }
  }

  // ---- Inject CSS ----
  function injectStyles() {
    const css = `
      /* ===== Cookie Banner Styles ===== */
      #atrixkz-cookie-banner {
        --cb-bg: #0d1117;
        --cb-border: #1e2530;
        --cb-text: #e0e0e0;
        --cb-text-muted: #8a8a8a;
        --cb-accent: #F5A623;
        --cb-accent-hover: #FFD700;
        --cb-accent-text: #0a0e1a;
        --cb-btn-secondary-bg: transparent;
        --cb-btn-secondary-border: #2a3445;
        --cb-btn-secondary-text: #e0e0e0;
        --cb-shadow: 0 -4px 30px rgba(0,0,0,0.4);
        --cb-radius: 14px;

        position: fixed;
        left: 0;
        right: 0;
        z-index: 999999;
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        animation: cbSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }

      #atrixkz-cookie-banner.cb-position-bottom {
        bottom: 0;
      }

      #atrixkz-cookie-banner.cb-position-top {
        top: 0;
        animation-name: cbSlideDown;
      }

      @keyframes cbSlideUp {
        from { transform: translateY(100%); opacity: 0; }
        to   { transform: translateY(0);   opacity: 1; }
      }

      @keyframes cbSlideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to   { transform: translateY(0);     opacity: 1; }
      }

      @keyframes cbFadeOut {
        from { opacity: 1; transform: translateY(0); }
        to   { opacity: 0; transform: translateY(20px); }
      }

      #atrixkz-cookie-banner.cb-hiding {
        animation: cbFadeOut 0.35s ease forwards;
        pointer-events: none;
      }

      .cb-inner {
        background: var(--cb-bg);
        border-top: 1px solid var(--cb-border);
        padding: 18px 24px;
      }

      .cb-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      .cb-content {
        display: flex;
        align-items: center;
        gap: 16px;
        flex: 1;
        min-width: 0;
      }

      .cb-icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        background: rgba(245, 166, 35, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      .cb-text-wrap {
        min-width: 0;
      }

      .cb-text {
        color: var(--cb-text);
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
      }

      .cb-text a {
        color: var(--cb-accent);
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
      }

      .cb-text a:hover {
        border-bottom-color: var(--cb-accent);
      }

      .cb-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
      }

      .cb-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 11px 22px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.25s ease;
        text-decoration: none;
        white-space: nowrap;
      }

      .cb-btn:focus-visible {
        box-shadow: 0 0 0 2px var(--cb-accent), 0 0 0 4px rgba(245, 166, 35, 0.2);
      }

      .cb-btn-accept {
        background: var(--cb-accent);
        color: var(--cb-accent-text);
      }

      .cb-btn-accept:hover {
        background: var(--cb-accent-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(245, 166, 35, 0.3);
      }

      .cb-btn-accept:active {
        transform: translateY(0);
      }

      .cb-btn-details {
        background: var(--cb-btn-secondary-bg);
        color: var(--cb-btn-secondary-text);
        border: 1.5px solid var(--cb-btn-secondary-border);
      }

      .cb-btn-details:hover {
        border-color: var(--cb-accent);
        color: var(--cb-accent);
      }

      .cb-close {
        display: none;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: none;
        border: none;
        color: var(--cb-text-muted);
        cursor: pointer;
        border-radius: 6px;
        transition: all 0.2s;
        flex-shrink: 0;
        padding: 0;
      }

      .cb-close:hover {
        color: var(--cb-text);
        background: rgba(255,255,255,0.05);
      }

      .cb-close svg {
        width: 16px;
        height: 16px;
      }

      /* ===== Responsive ===== */
      @media (max-width: 768px) {
        .cb-container {
          flex-direction: column;
          align-items: stretch;
          gap: 16px;
        }

        .cb-content {
          gap: 12px;
        }

        .cb-icon {
          width: 36px;
          height: 36px;
          font-size: 18px;
        }

        .cb-text {
          font-size: 13px;
        }

        .cb-actions {
          justify-content: stretch;
        }

        .cb-btn {
          flex: 1;
          padding: 12px 16px;
        }
      }

      @media (max-width: 480px) {
        .cb-inner {
          padding: 16px;
        }

        .cb-btn {
          font-size: 13px;
          padding: 10px 14px;
        }

        .cb-close {
          display: flex;
          position: absolute;
          top: 8px;
          right: 8px;
        }
      }
    `;

    const styleEl = document.createElement('style');
    styleEl.id = 'atrixkz-cookie-banner-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  // ---- Build Banner HTML ----
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'atrixkz-cookie-banner';
    banner.className = CONFIG.bannerPosition === 'top' ? 'cb-position-top' : 'cb-position-bottom';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Уведомление об использовании cookies');

    banner.innerHTML = `
      <div class="cb-inner">
        <div class="cb-container">
          <div class="cb-content">
            <div class="cb-icon" aria-hidden="true">&#127850;</div>
            <div class="cb-text-wrap">
              <p class="cb-text">
                ${CONFIG.bannerText}
                <a href="${CONFIG.privacyPolicyUrl}">Политика конфиденциальности</a>.
              </p>
            </div>
          </div>
          <div class="cb-actions">
            <button type="button" class="cb-btn cb-btn-accept" id="atrixkz-cookie-accept">
              ${CONFIG.acceptBtnText}
            </button>
            <a href="${CONFIG.privacyPolicyUrl}" class="cb-btn cb-btn-details" id="atrixkz-cookie-details">
              ${CONFIG.detailsBtnText}
            </a>
          </div>
          <button type="button" class="cb-close" id="atrixkz-cookie-close" aria-label="Закрыть">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    `;

    return banner;
  }

  // ---- Remove Banner ----
  function removeBanner(banner) {
    banner.classList.add('cb-hiding');
    banner.addEventListener('animationend', function () {
      if (banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
    }, { once: true });
  }

  // ---- Initialize ----
  function init() {
    // Don't show if consent already given
    if (hasConsent()) {
      return;
    }

    // Don't show in non-browser environments
    if (typeof document === 'undefined') {
      return;
    }

    // Wait for DOM to be ready
    function onReady() {
      // Inject styles
      if (!document.getElementById('atrixkz-cookie-banner-styles')) {
        injectStyles();
      }

      // Check again (consent might have been given during load)
      if (hasConsent()) {
        return;
      }

      // Create and append banner
      const banner = createBanner();
      document.body.appendChild(banner);

      // Accept button
      const acceptBtn = document.getElementById('atrixkz-cookie-accept');
      if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
          saveConsent();
          removeBanner(banner);
        });
      }

      // Close button (X)
      const closeBtn = document.getElementById('atrixkz-cookie-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          removeBanner(banner);
        });
      }

      // Auto-hide (optional)
      if (CONFIG.autoHideDelay && typeof CONFIG.autoHideDelay === 'number') {
        setTimeout(function () {
          if (document.body.contains(banner)) {
            removeBanner(banner);
          }
        }, CONFIG.autoHideDelay);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady);
    } else {
      onReady();
    }
  }

  // ---- Public API ----
  window.AtrikxCookieBanner = {
    init: init,
    hasConsent: hasConsent,
    resetConsent: function () {
      try {
        localStorage.removeItem(CONFIG.localStorageKey);
        localStorage.removeItem(CONFIG.localStorageKey + '_date');
      } catch (e) {
        // localStorage not available
      }
    },
    show: function () {
      window.AtrikxCookieBanner.resetConsent();
      init();
    },
    config: CONFIG,
  };

  // Auto-init
  init();
})();
