(function () {
  if (window.TIM_CORE_LOADED) return;
  window.TIM_CORE_LOADED = true;

  const TEXT = {
    vi: {
      title: "Tim ♥️ AI",
      subtitle: "Bộ não xuyên hệ thống LICENSEGOC™",
      chatTab: "Chat",
      helpTab: "Help",
      langTab: "Ngôn ngữ",
      publicTab: "Public",
      askPlaceholder: "Hỏi Tim ♥️ bất cứ điều gì...",
      send: "Gửi",
      welcome1: "Chào mừng đến với LICENSEGOC™.",
      welcome2: "Tim ♥️ đang hiện diện mọi nơi để hỗ trợ người dùng toàn cầu.",
      welcome3: "Bạn có thể hỏi về hệ thống, chức năng, hướng đi tiếp theo hoặc nhờ giải thích trang hiện tại.",
      help1t: "Giới thiệu hệ thống",
      help1d: "Tóm tắt LICENSE GỐC, LICENSEGOC, LICENSENETWORK, LICENSECOIN và TIM ♥️ AI.",
      help2t: "Dẫn hướng trang",
      help2d: "Hỏi Tim ♥️ nên đi tiếp trang nào theo vai trò creator, business hay investor.",
      help3t: "Giải thích chức năng",
      help3d: "Tim ♥️ giải thích nút bấm, popup, flow, room, chat và các lớp hệ thống.",
      help4t: "Translation toàn hệ",
      help4d: "Đổi nhanh ngôn ngữ cho toàn bộ website ở mức core translation.",
      langNote:
        "Translation Core đã kích hoạt. Các phần có data-vi / data-en sẽ đổi tự động. Các ngôn ngữ khác hiện dùng bản quốc tế nền.",
      toastLang: "Đã đổi ngôn ngữ hệ thống.",
      toastOpen: "Tim ♥️ đã sẵn sàng.",
      empty: "Hãy nhập câu hỏi.",
      publicTitle: "Public Chat Moderation",
      publicNote:
        "Mọi nội dung public đều đi qua pending + moderation để giữ công bằng và văn minh.",
      publicPlaceholder: "Viết nội dung public ở đây...",
      publicCheck: "Kiểm tra nội dung",
      publicSubmit: "Gửi vào Pending",
      publicClear: "Xóa",
      pendingOk: "Nội dung đã vào hàng chờ kiểm duyệt.",
      pendingBad: "Nội dung chứa từ ngữ không phù hợp. Hãy chỉnh lại trước khi gửi.",
      pendingWarn:
        "Nội dung đang chờ duyệt để đảm bảo công bằng và an toàn cộng đồng.",
      bannedWordsGood: "lọc từ tục",
      bannedWordsGood2: "lọc spam",
      bannedWordsGood3: "pending review",
      canned_system:
        "LICENSEGOC™ là lõi hệ sinh thái. LICENSENETWORK™ là lớp kết nối toàn cầu. LICENSECOIN™ là lớp giá trị số. TIM ♥️ AI là trí tuệ đồng hành xuyên toàn hệ thống.",
      canned_where:
        "Lộ trình tốt nhất thường là: Introduction → LICENSEGOC → TIM / LICENSENETWORK / LICENSECOIN → Commercial / USPTO tùy mục tiêu của bạn.",
      canned_translate:
        "Translation Core đã được kích hoạt ở cấp hệ thống. Hiện đang hỗ trợ 12 ngôn ngữ lớn bằng engine chung.",
      canned_investor:
        "Nếu là investor, bạn nên xem: Introduction → LICENSEGOC → LICENSENETWORK → Commercial → LICENSECOIN. Đây là trục giúp nhìn rõ triết lý, network, thương mại và economic layer.",
      canned_tim:
        "Tim ♥️ là lớp AI hiện diện mọi nơi để giải thích, dẫn hướng, hỗ trợ ngôn ngữ, trả lời câu hỏi nhanh và làm cánh tay đắc lực cho sáng tạo trong LICENSE GỐC™.",
      canned_default:
        "Tim ♥️ đã nhận câu hỏi. Ở bản CORE hiện tại, Tim trả lời theo tri thức hệ thống và định hướng bước tiếp theo phù hợp.",
    },
    en: {
      title: "Tim ♥️ AI",
      subtitle: "Cross-system brain for LICENSEGOC™",
      chatTab: "Chat",
      helpTab: "Help",
      langTab: "Language",
      publicTab: "Public",
      askPlaceholder: "Ask Tim ♥️ anything...",
      send: "Send",
      welcome1: "Welcome to LICENSEGOC™.",
      welcome2: "Tim ♥️ is present everywhere to support global users.",
      welcome3:
        "You can ask about the system, features, next steps, or request an explanation of the current page.",
      help1t: "System introduction",
      help1d:
        "Quick overview of LICENSE GỐC, LICENSEGOC, LICENSENETWORK, LICENSECOIN, and TIM ♥️ AI.",
      help2t: "Page guidance",
      help2d:
        "Ask Tim ♥️ which page to visit next for creators, businesses, or investors.",
      help3t: "Feature explanation",
      help3d:
        "Tim ♥️ explains buttons, popups, flows, rooms, chat, and system layers.",
      help4t: "Full-system translation",
      help4d: "Quickly switch system language using the core translation layer.",
      langNote:
        "Translation Core is active. Elements using data-vi / data-en switch automatically. Other languages currently use the international base mode.",
      toastLang: "System language updated.",
      toastOpen: "Tim ♥️ is ready.",
      empty: "Please enter a question.",
      publicTitle: "Public Chat Moderation",
      publicNote:
        "All public content goes through pending + moderation to maintain fairness and civility.",
      publicPlaceholder: "Write your public message here...",
      publicCheck: "Check content",
      publicSubmit: "Submit to Pending",
      publicClear: "Clear",
      pendingOk: "Your message has been moved to the moderation queue.",
      pendingBad:
        "Your message contains inappropriate wording. Please revise before submitting.",
      pendingWarn:
        "This message is waiting for review to protect fairness and community safety.",
      bannedWordsGood: "profanity filter",
      bannedWordsGood2: "spam filter",
      bannedWordsGood3: "pending review",
      canned_system:
        "LICENSEGOC™ is the ecosystem core. LICENSENETWORK™ is the global connect layer. LICENSECOIN™ is the digital value layer. TIM ♥️ AI is the companion intelligence across the full system.",
      canned_where:
        "The best route is usually: Introduction → LICENSEGOC → TIM / LICENSENETWORK / LICENSECOIN → Commercial / USPTO depending on your goal.",
      canned_translate:
        "The Translation Core has been activated at the system level. It currently supports 12 major languages through a shared engine.",
      canned_investor:
        "If you are an investor, start with: Introduction → LICENSEGOC → LICENSENETWORK → Commercial → LICENSECOIN. This route shows the philosophy, network, commercial path, and economic layer clearly.",
      canned_tim:
        "Tim ♥️ is the AI presence across the ecosystem for explanation, guidance, language support, fast Q&A, and creation acceleration inside LICENSE GỐC™.",
      canned_default:
        "Tim ♥️ received your question. In the current CORE version, Tim answers with system knowledge and suggests the next best step.",
    },
  };

  const supportedLanguages = [
    { code: "vi", label: "🇻🇳 VI" },
    { code: "en", label: "🇺🇸 EN" },
    { code: "zh", label: "🇨🇳 中文" },
    { code: "ja", label: "🇯🇵 日本語" },
    { code: "ko", label: "🇰🇷 한국어" },
    { code: "fr", label: "🇫🇷 FR" },
    { code: "de", label: "🇩🇪 DE" },
    { code: "es", label: "🇪🇸 ES" },
    { code: "pt", label: "🇵🇹 PT" },
    { code: "ar", label: "🇸🇦 AR" },
    { code: "hi", label: "🇮🇳 HI" },
    { code: "ru", label: "🇷🇺 RU" },
  ];

  const bannedWords = [
    "fuck", "shit", "bitch", "asshole", "motherfucker",
    "đụ", "địt", "cặc", "lồn", "đéo", "ngu lồn", "đmm", "đm", "vãi lồn"
  ];

  let currentLang = localStorage.getItem("licensegoc_lang") || "vi";
  let toastTimer = null;

  function baseLang(code) {
    return code === "vi" ? "vi" : "en";
  }

  function t(key) {
    const pack = TEXT[baseLang(currentLang)] || TEXT.vi;
    return pack[key] || key;
  }

  function showToast(message) {
    const toast = document.getElementById("tim-core-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function applyGlobalTranslation() {
    document.documentElement.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-vi]").forEach((el) => {
      const html =
        baseLang(currentLang) === "vi"
          ? el.getAttribute("data-vi")
          : el.getAttribute("data-en") || el.getAttribute("data-vi");
      if (html !== null) el.innerHTML = html;
    });

    document.querySelectorAll("[data-placeholder-vi]").forEach((el) => {
      const value =
        baseLang(currentLang) === "vi"
          ? el.getAttribute("data-placeholder-vi")
          : el.getAttribute("data-placeholder-en") || el.getAttribute("data-placeholder-vi");
      if (value !== null) el.setAttribute("placeholder", value);
    });

    window.dispatchEvent(
      new CustomEvent("licensegoc:languageChanged", {
        detail: { lang: currentLang },
      })
    );
  }

  function addBubble(type, text) {
    const log = document.getElementById("tim-core-chat-log");
    if (!log) return;
    const bubble = document.createElement("div");
    bubble.className = `tim-bubble ${type}`;
    bubble.textContent = text;
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  }

  function seedChat() {
    const log = document.getElementById("tim-core-chat-log");
    if (!log) return;
    log.innerHTML = "";
    addBubble("ai", t("welcome1"));
    addBubble("ai", t("welcome2"));
    addBubble("ai", t("welcome3"));
  }

  function answerMessage(msg) {
    const q = msg.toLowerCase();

    if (q.includes("licensegoc") || q.includes("hệ thống") || q.includes("system")) {
      return t("canned_system");
    }
    if (q.includes("đang ở đâu") || q.includes("where") || q.includes("trang nào")) {
      return t("canned_where");
    }
    if (q.includes("translate") || q.includes("dịch") || q.includes("ngôn ngữ") || q.includes("language")) {
      return t("canned_translate");
    }
    if (q.includes("investor") || q.includes("nhà đầu tư")) {
      return t("canned_investor");
    }
    if (q.includes("tim") || q.includes("ai")) {
      return t("canned_tim");
    }
    return t("canned_default");
  }

  function sendMessage() {
    const input = document.getElementById("tim-core-input");
    if (!input) return;

    const value = input.value.trim();
    if (!value) {
      showToast(t("empty"));
      return;
    }

    addBubble("user", value);
    input.value = "";

    setTimeout(() => addBubble("ai", answerMessage(value)), 420);
  }

  function containsBannedWords(text) {
    const lower = text.toLowerCase();
    return bannedWords.some((word) => lower.includes(word));
  }

  function looksSpam(text) {
    const lower = text.toLowerCase().trim();
    if (lower.length < 2) return true;
    if (/(.)\1{7,}/.test(lower)) return true;
    if ((lower.match(/https?:\/\//g) || []).length > 2) return true;
    return false;
  }

  function checkPublicMessage() {
    const input = document.getElementById("tim-public-input");
    const status = document.getElementById("tim-public-status");
    if (!input || !status) return false;

    const value = input.value.trim();

    if (!value) {
      status.textContent = t("empty");
      status.style.color = "var(--core-red)";
      return false;
    }

    if (containsBannedWords(value) || looksSpam(value)) {
      status.textContent = t("pendingBad");
      status.style.color = "var(--core-red)";
      return false;
    }

    status.textContent = t("pendingWarn");
    status.style.color = "var(--core-muted)";
    return true;
  }

  function submitPublicMessage() {
    const ok = checkPublicMessage();
    const status = document.getElementById("tim-public-status");
    if (!ok || !status) return;

    status.textContent = t("pendingOk");
    status.style.color = "var(--core-green)";
    showToast(t("pendingOk"));
  }

  function clearPublicMessage() {
    const input = document.getElementById("tim-public-input");
    const status = document.getElementById("tim-public-status");
    if (input) input.value = "";
    if (status) status.textContent = "";
  }

  function switchView(view) {
    document.querySelectorAll(".tim-core-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === view);
    });

    document.querySelectorAll(".tim-core-view").forEach((panel) => {
      panel.classList.toggle("active", panel.getAttribute("data-view-panel") === view);
    });
  }

  function openPanel() {
    document.getElementById("tim-core-panel")?.classList.add("show");
    document.getElementById("tim-core-overlay")?.classList.add("show");
    showToast(t("toastOpen"));
  }

  function closePanel() {
    document.getElementById("tim-core-panel")?.classList.remove("show");
    document.getElementById("tim-core-overlay")?.classList.remove("show");
  }

  function renderLanguageButtons() {
    const grid = document.getElementById("tim-lang-grid");
    if (!grid) return;

    grid.innerHTML = "";
    supportedLanguages.forEach((lang) => {
      const btn = document.createElement("button");
      btn.className = "tim-core-chip";
      if (currentLang === lang.code) btn.classList.add("active");
      btn.type = "button";
      btn.textContent = lang.label;
      btn.addEventListener("click", () => {
        currentLang = lang.code;
        localStorage.setItem("licensegoc_lang", currentLang);
        updateStaticText();
        showToast(t("toastLang"));
      });
      grid.appendChild(btn);
    });
  }

  function updateStaticText() {
    const mapText = [
      ["tim-core-title", "title"],
      ["tim-core-subtitle", "subtitle"],
      ["tim-tab-chat", "chatTab"],
      ["tim-tab-help", "helpTab"],
      ["tim-tab-lang", "langTab"],
      ["tim-tab-public", "publicTab"],
      ["tim-core-send", "send"],
      ["tim-help-1t", "help1t"],
      ["tim-help-1d", "help1d"],
      ["tim-help-2t", "help2t"],
      ["tim-help-2d", "help2d"],
      ["tim-help-3t", "help3t"],
      ["tim-help-3d", "help3d"],
      ["tim-help-4t", "help4t"],
      ["tim-help-4d", "help4d"],
      ["tim-lang-note", "langNote"],
      ["tim-public-title", "publicTitle"],
      ["tim-public-note", "publicNote"],
      ["tim-public-check", "publicCheck"],
      ["tim-public-submit", "publicSubmit"],
      ["tim-public-clear", "publicClear"],
      ["tag-good-1", "bannedWordsGood"],
      ["tag-good-2", "bannedWordsGood2"],
      ["tag-good-3", "bannedWordsGood3"],
    ];

    mapText.forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t(key);
    });

    const chatInput = document.getElementById("tim-core-input");
    if (chatInput) chatInput.placeholder = t("askPlaceholder");

    const publicInput = document.getElementById("tim-public-input");
    if (publicInput) publicInput.placeholder = t("publicPlaceholder");

    renderLanguageButtons();
    applyGlobalTranslation();
  }

  function createHTML() {
    const overlay = document.createElement("div");
    overlay.id = "tim-core-overlay";
    overlay.className = "tim-core-overlay";

    const launcher = document.createElement("button");
    launcher.id = "tim-core-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Open Tim AI");
    launcher.innerHTML = "♥";

    const panel = document.createElement("div");
    panel.id = "tim-core-panel";
    panel.innerHTML = `
      <div class="tim-core-header">
        <div class="tim-core-brand">
          <div class="tim-core-brand-mark">♥</div>
          <div class="tim-core-brand-text">
            <b id="tim-core-title"></b>
            <span id="tim-core-subtitle"></span>
          </div>
        </div>
        <div class="tim-core-actions">
          <button class="tim-core-icon-btn" id="tim-core-minimize" type="button">−</button>
          <button class="tim-core-icon-btn" id="tim-core-close" type="button">×</button>
        </div>
      </div>

      <div class="tim-core-toolbar">
        <button class="tim-core-tab active" type="button" data-view="chat" id="tim-tab-chat"></button>
        <button class="tim-core-tab" type="button" data-view="help" id="tim-tab-help"></button>
        <button class="tim-core-tab" type="button" data-view="lang" id="tim-tab-lang"></button>
        <button class="tim-core-tab" type="button" data-view="public" id="tim-tab-public"></button>
      </div>

      <div class="tim-core-body">
        <div class="tim-core-view active" data-view-panel="chat">
          <div class="tim-core-chat-log" id="tim-core-chat-log"></div>
          <div class="tim-core-chat-input-wrap">
            <input id="tim-core-input" type="text" />
            <button class="tim-core-send" id="tim-core-send" type="button"></button>
          </div>
        </div>

        <div class="tim-core-view" data-view-panel="help">
          <div class="tim-core-scroll">
            <div class="tim-core-list">
              <div class="tim-core-row"><b id="tim-help-1t"></b><span id="tim-help-1d"></span></div>
              <div class="tim-core-row"><b id="tim-help-2t"></b><span id="tim-help-2d"></span></div>
              <div class="tim-core-row"><b id="tim-help-3t"></b><span id="tim-help-3d"></span></div>
              <div class="tim-core-row"><b id="tim-help-4t"></b><span id="tim-help-4d"></span></div>
            </div>
          </div>
        </div>

        <div class="tim-core-view" data-view-panel="lang">
          <div class="tim-core-scroll">
            <p class="tim-core-note" id="tim-lang-note"></p>
            <div class="tim-core-chip-grid" id="tim-lang-grid"></div>
          </div>
        </div>

        <div class="tim-core-view" data-view-panel="public">
          <div class="tim-core-scroll">
            <div class="tim-core-row">
              <b id="tim-public-title"></b>
              <span id="tim-public-note"></span>
              <div>
                <span class="tim-core-tag good" id="tag-good-1"></span>
                <span class="tim-core-tag good" id="tag-good-2"></span>
                <span class="tim-core-tag warn" id="tag-good-3"></span>
              </div>
            </div>

            <div class="tim-core-public-box">
              <textarea id="tim-public-input"></textarea>
              <div class="tim-core-public-actions">
                <button class="tim-core-btn-secondary" id="tim-public-check" type="button"></button>
                <button class="tim-core-btn-primary" id="tim-public-submit" type="button"></button>
                <button class="tim-core-btn-secondary" id="tim-public-clear" type="button"></button>
              </div>
              <div class="tim-core-public-status" id="tim-public-status"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const toast = document.createElement("div");
    toast.id = "tim-core-toast";
    toast.className = "tim-core-toast";

    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    document.body.appendChild(launcher);
    document.body.appendChild(toast);
  }

  function bindEvents() {
    document.getElementById("tim-core-launcher")?.addEventListener("click", openPanel);
    document.getElementById("tim-core-close")?.addEventListener("click", closePanel);
    document.getElementById("tim-core-minimize")?.addEventListener("click", closePanel);
    document.getElementById("tim-core-overlay")?.addEventListener("click", closePanel);
    document.getElementById("tim-core-send")?.addEventListener("click", sendMessage);

    document.getElementById("tim-core-input")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    document.getElementById("tim-public-check")?.addEventListener("click", checkPublicMessage);
    document.getElementById("tim-public-submit")?.addEventListener("click", submitPublicMessage);
    document.getElementById("tim-public-clear")?.addEventListener("click", clearPublicMessage);

    document.querySelectorAll(".tim-core-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePanel();
    });
  }

  function init() {
    createHTML();
    bindEvents();
    updateStaticText();
    seedChat();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
