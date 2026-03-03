function showPage(id) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));

  const page = document.getElementById(`page-${id}`);
  if (page) page.classList.add("active");

  const navLink = document.querySelector(`.nav-link[data-nav="${id}"]`);
  if (navLink) navLink.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterCards(category, btn) {
  document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
  if (btn) btn.classList.add("active");

  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = category === "all" || card.dataset.cat === category ? "" : "none";
  });
}

function sendForm() {
  const success = document.getElementById("success-msg");
  if (!success) return;

  success.classList.add("show");
  setTimeout(() => success.classList.remove("show"), 4000);
}

document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-nav");
    if (target) showPage(target);
  });
});

document.querySelectorAll("[data-filter]").forEach((el) => {
  el.addEventListener("click", () => {
    const category = el.getAttribute("data-filter") || "all";
    filterCards(category, el);
  });
});

const sendButton = document.querySelector("[data-send='true']");
if (sendButton) sendButton.addEventListener("click", sendForm);

const firstNav = document.querySelector(".nav-link[data-nav='inicio']");
if (firstNav) firstNav.classList.add("active");
