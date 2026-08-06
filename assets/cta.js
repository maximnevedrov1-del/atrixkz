/* Atrix KZ — конверсионный слой: плавающая WhatsApp-кнопка + липкий CTA-бар с квизом */
(function () {
  "use strict";
  if (window.__atrixCtaLoaded) return;
  window.__atrixCtaLoaded = true;

  var WA = "https://wa.me/77064217536";
  var WA_TEXT = encodeURIComponent("Здравствуйте! Пишу с сайта atrixkz.kz. Нужна консультация по промышленному пылесосу.");
  var QUIZ = "/podbor-pylesosa.html";

  var css = `
.atx-wa-float{position:fixed;right:20px;bottom:20px;z-index:9998;width:56px;height:56px;border-radius:50%;
background:#25d366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.45);
transition:transform .2s ease;animation:atxPulse 2.6s infinite}
.atx-wa-float:hover{transform:scale(1.08)}
.atx-wa-float svg{width:30px;height:30px;fill:#fff}
@keyframes atxPulse{0%{box-shadow:0 4px 16px rgba(0,0,0,.45),0 0 0 0 rgba(37,211,102,.5)}
70%{box-shadow:0 4px 16px rgba(0,0,0,.45),0 0 0 16px rgba(37,211,102,0)}
100%{box-shadow:0 4px 16px rgba(0,0,0,.45),0 0 0 0 rgba(37,211,102,0)}}
.atx-cta-bar{position:fixed;left:0;right:0;bottom:0;z-index:9997;background:rgba(10,15,26,.97);
border-top:1px solid #2a3444;padding:12px 16px;display:none;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;
font-family:'Inter',system-ui,sans-serif}
.atx-cta-bar.atx-visible{display:flex}
.atx-cta-bar p{margin:0;color:#e5e7eb;font-size:14px;font-weight:600}
.atx-cta-bar .atx-bquiz{background:#e8b94a;color:#0a0f1a;font-weight:800;font-size:14px;padding:9px 18px;border-radius:8px;text-decoration:none;white-space:nowrap}
.atx-cta-bar .atx-bquiz:hover{background:#f5cd6e}
.atx-cta-bar .atx-bwa{color:#25d366;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap}
.atx-cta-bar .atx-bwa:hover{text-decoration:underline}
.atx-cta-bar .atx-close{position:absolute;right:10px;top:8px;background:none;border:none;color:#6b7280;font-size:18px;cursor:pointer;line-height:1;padding:4px}
.atx-cta-bar .atx-close:hover{color:#e5e7eb}
@media(max-width:640px){.atx-cta-bar{padding:10px 34px 10px 12px;gap:8px}.atx-cta-bar p{font-size:13px;width:100%;text-align:center}
.atx-wa-float{right:14px;bottom:76px}}`;

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // Плавающая WhatsApp-кнопка
  var wa = document.createElement("a");
  wa.href = WA + "?text=" + WA_TEXT;
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.className = "atx-wa-float";
  wa.setAttribute("aria-label", "Написать в WhatsApp");
  wa.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.27z"/></svg>';
  document.body.appendChild(wa);

  // Липкий CTA-бар (не показываем на самой странице квиза)
  if (location.pathname.indexOf("podbor-pylesosa") === -1) {
    var dismissed = false;
    try { dismissed = sessionStorage.getItem("atxCtaClosed") === "1"; } catch (e) {}

    if (!dismissed) {
      var bar = document.createElement("div");
      bar.className = "atx-cta-bar";
      bar.innerHTML =
        '<p>Не знаете, какой пылесос подойдёт? Подбор за 1 минуту</p>' +
        '<a class="atx-bquiz" href="' + QUIZ + '">Пройти квиз →</a>' +
        '<a class="atx-bwa" href="' + WA + "?text=" + WA_TEXT + '" target="_blank" rel="noopener">WhatsApp</a>' +
        '<button class="atx-close" aria-label="Закрыть">×</button>';
      document.body.appendChild(bar);

      bar.querySelector(".atx-close").addEventListener("click", function () {
        bar.classList.remove("atx-visible");
        try { sessionStorage.setItem("atxCtaClosed", "1"); } catch (e) {}
      });

      var shown = false;
      function onScroll() {
        if (shown) return;
        var h = document.documentElement;
        var scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        if (scrolled > 0.35 || h.scrollTop > 600) {
          shown = true;
          bar.classList.add("atx-visible");
          window.removeEventListener("scroll", onScroll);
        }
      }
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }
})();
