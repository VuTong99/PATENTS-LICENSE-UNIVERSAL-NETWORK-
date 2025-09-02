/* ===== GOC GLOBAL UI (Floating Bar Clear + Translate + LICENSEGOC Panel) =====
   Paste as /goc-ui.js  —  Include once on every page: <script src="/goc-ui.js" defer></script>
   All links/texts edit in CONFIG below. No other page changes needed. */

(function () {
  // ---------- CONFIG (edit me later, one place for all pages) ----------
  const CONFIG = {
    brand: "LICENSE GỐC™",
    repoUrl: "https://github.com/vutong99/PATENTS-LICENSE-UNIVERSAL-NETWORK-", // link tạm tới repo hiện tại
    links: [
      { text: "Home", href: "/index.html" },
      { text: "Creations Room", href: "/creationsroom.html" },
      { text: "Pay & Cards", href: "/paycards.html" },
      { text: "Submit", href: "/submit.html" },
      { text: "Gallery", href: "/gallery.html" },
      { text: "Commercial", href: "/commercial.html" },
    ],
    // Nút đặc biệt xuất hiện đầu thanh: LICENSEGOC (mở panel giới thiệu + future news, pictures, arts…)
    licensegocButtonText: "LICENSEGOC",
    // Nội dung panel có thể mở rộng vô hạn (thêm section mới là được)
    panel: {
      title: "LICENSE GỐC™ — Protect the Roots. Empower Humanity.",
      sections: [
        {
          heading: "Introduction",
          html: `
            LICENSE GỐC™ là nền tảng toàn cầu kết hợp: Copyright + Patents,
            Social Media, Blockchain & AI, và Creative Economy.`
        },
        {
          heading: "Ecosystem",
          html: `
            <ul>
              <li>LICENSENETWORK™ — mạng xã hội bản quyền toàn cầu</li>
              <li>LICENSECOIN™ — token kinh tế sáng tạo</li>
              <li>Vault — Lưu trữ & đóng dấu ý tưởng</li>
              <li>Marketplace / Commercial — giao dịch minh bạch</li>
            </ul>`
        },
        {
          heading: "Strategy (2025 →)",
          html: `
            <ol>
              <li>Triển khai hạ tầng (Vercel + Supabase + GitHub)</li>
              <li>Ra mắt LICENSECOIN™ & Copyright Vault</li>
              <li>Đa ngôn ngữ & kết nối USPTO/WIPO</li>
            </ol>`
        },
        {
          heading: "Official Links",
          html: `
            <p>Website: <a href="https://thelicenseuniversal.com" target="_blank">thelicenseuniversal.com</a></p>
            <p>GitHub (repo hiện tại): <a href="${location.origin}${CONFIG?.repoUrl ? '' : ''}" target="_blank">${CONFIG.repoUrl}</a></p>`
        },
        {
          heading: "News / Pictures / Arts / Movies",
          html: `<p>Chỗ này để đăng tin, ảnh, video nghệ thuật… Sau này chỉ sửa phần CONFIG là cập nhật toàn site.</p>`
        }
      ]
    },
    // Ngôn ngữ Google Translate (có thể thêm mã khác, cách nhau bằng dấu phẩy)
    translateIncludedLangs: "en,vi,fr,ja,ko,zh-CN,es,pt,ru,de"
  };

  // ---------- CSS (tự chèn) ----------
  const css = `
:root{
  --ink:#eae7dc;--muted:#a8b3c7;--line:rgba(255,215,0,.20);
  --panel:rgba(15,17,23,.8);--bg:#0a0b0f;
}
html,body{background:#0a0b0f;color:var(--ink)}
/* Floating Bar Clear */
.goc-bar{position:fixed;left:12px;right:12px;bottom:12px;z-index:999999;
  display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:center;
  padding:10px;border-radius:16px;border:1px solid var(--line);
  background:linear-gradient(180deg,rgba(20,22,28,.65),rgba(10,11,15,.65));
  backdrop-filter:blur(8px); box-shadow:0 10px 40px rgba(0,0,0,.45);
}
.goc-pill{appearance:none;border:none;cursor:pointer;font:600 14px/1.1 system-ui,-apple-system,Segoe UI,Roboto;
  padding:10px 14px;border-radius:12px;white-space:nowrap;color:#111;
  background:linear-gradient(180deg,#ffd66b,#f4c84f); box-shadow:inset 0 0 0 1px rgba(255,255,255,.25), 0 4px 18px rgba(0,0,0,.35);
  text-decoration:none;display:inline-flex;align-items:center;gap:8px;
}
.goc-pill.trans{background:linear-gradient(180deg,#ffffff,#eaeaea)}
.goc-pill.dark{color:var(--ink);background:linear-gradient(180deg,#1a1f2a,#0f131a)}
.goc-brand{margin-right:6px;font-weight:800;letter-spacing:.3px}
.goc-ghost{border:1px solid var(--line);background:transparent;color:var(--ink)}
/* LICENSEGOC Panel */
#goc-panel{position:fixed;inset:0;z-index:999998;display:none;align-items:center;justify-content:center}
#goc-panel.open{display:flex}
.goc-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(2px)}
.goc-sheet{position:relative;max-width:min(920px,92vw);max-height:86vh;overflow:auto;
  width:920px;background:linear-gradient(180deg,#12151b,#0d1015);border:1px solid var(--line);
  border-radius:16px;box-shadow:0 20px 80px rgba(0,0,0,.55);padding:20px 18px}
.goc-sheet h2{margin:6px 0 14px;font:800 22px/1.2 system-ui}
.goc-sec{border-top:1px dashed var(--line);padding:14px 0}
.goc-sec h3{margin:0 0 6px;font:700 16px/1.2 system-ui}
.goc-close{position:absolute;top:10px;right:10px}
#goc-trans-tray{position:fixed;right:12px;bottom:78px;z-index:999997;
  background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px;display:none}
#goc-trans-tray.open{display:block}
#goc-trans-title{font:700 12px/1 system-ui;margin:0 0 8px;color:var(--muted)}
#google_translate_element{transform:translateZ(0)}
@media (max-width:600px){ .goc-pill{padding:10px 12px;font-size:13px} }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ---------- Helpers ----------
  const el = (tag, props = {}, html = "") => {
    const n = document.createElement(tag);
    Object.assign(n, props);
    if (html) n.innerHTML = html;
    return n;
  };
  const linkBtn = (text, href, extraClass = "") =>
    Object.assign(el('a', { className: `goc-pill ${extraClass}`, href }), { textContent: text });

  // ---------- Translate Tray (Google) ----------
  const transTray = el('div', { id: 'goc-trans-tray' });
  transTray.innerHTML = `
    <div id="goc-trans-title">Translate</div>
    <div id="google_translate_element"></div>
  `;
  document.body.appendChild(transTray);

  function loadGoogleTranslate() {
    if (window._gtrLoaded) return;
    window._gtrLoaded = true;
    window.googleTranslateElementInit = function () {
      /* global google */
      new google.translate.TranslateElement(
        {
          pageLanguage: document.documentElement.lang || "vi",
          includedLanguages: CONFIG.translateIncludedLangs,
          autoDisplay: false,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    };
    const s = document.createElement("script");
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.head.appendChild(s);
  }

  // ---------- LICENSEGOC Panel ----------
  const panel = el('div', { id: 'goc-panel' });
  panel.innerHTML = `
    <div class="goc-backdrop"></div>
    <div class="goc-sheet" role="dialog" aria-modal="true" aria-label="LICENSEGOC">
      <button class="goc-pill goc-ghost goc-close">✕</button>
      <h2>🌐 ${CONFIG.panel.title}</h2>
      <div id="goc-panel-body"></div>
    </div>`;
  document.body.appendChild(panel);

  function fillPanel() {
    const body = panel.querySelector('#goc-panel-body');
    body.innerHTML = "";
    CONFIG.panel.sections.forEach(sec => {
      const wrap = el('section', { className: 'goc-sec' });
      wrap.appendChild(el('h3', { textContent: sec.heading }));
      const c = el('div');
      c.innerHTML = sec.html;
      wrap.appendChild(c);
      body.appendChild(wrap);
    });
  }

  // ---------- Floating Bar ----------
  function makeBar() {
    if (document.querySelector('.goc-bar')) return;

    const bar = el('div', { className: 'goc-bar', role: 'navigation' });

    // Brand
    const brand = el('span', { className: 'goc-pill dark goc-brand' }, `🌍 ${CONFIG.brand}`);
    brand.style.pointerEvents = 'none';
    bar.appendChild(brand);

    // LICENSEGOC special button (opens panel)
    const lcBtn = linkBtn(CONFIG.licensegocButtonText, "#", "dark");
    lcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fillPanel();
      panel.classList.add('open');
    });
    bar.appendChild(lcBtn);

    // Standard links
    CONFIG.links.forEach(({ text, href }) => {
      bar.appendChild(linkBtn(text, href));
    });

    // Repo link (will swap later when có domain riêng)
    const repo = linkBtn("GitHub", CONFIG.repoUrl, "goc-ghost");
    bar.appendChild(repo);

    // Translate toggle
    const trans = linkBtn("🌐 Translate", "#", "trans");
    trans.addEventListener('click', (e) => {
      e.preventDefault();
      loadGoogleTranslate();
      transTray.classList.toggle('open');
    });
    bar.appendChild(trans);

    document.body.appendChild(bar);
  }

  // Close handlers
  panel.addEventListener('click', (e) => {
    if (e.target.classList.contains('goc-backdrop') ||
        e.target.classList.contains('goc-close')) {
      panel.classList.remove('open');
    }
  });

  // Init
  document.addEventListener('DOMContentLoaded', makeBar, { once: true });
})();
