/* Focus Frameworks — Nav
   Mobile menu toggle + active link highlighting.
*/

const ROUTE_TO_KEY = {
  "/agency": "agency",
  "/products": "products",
  "/digital": "products",
  "/detailing": "detailing",
  "/contact": "contact",
};

function getRouteKey() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (ROUTE_TO_KEY[path]) return ROUTE_TO_KEY[path];
  const file = path.split("/").pop();
  if (file === "agency.html") return "agency";
  if (file === "digital.html") return "products";
  if (file === "detailing.html") return "detailing";
  if (file === "contact.html") return "contact";
  return null;
}

function markActiveLink() {
  const key = getRouteKey();
  if (!key) return;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === key) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupMobileMenu() {
  const openBtn = document.querySelector("[data-nav-open]");
  const closeBtn = document.querySelector("[data-nav-close]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!openBtn || !menu) return;

  const open = () => {
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    openBtn.setAttribute("aria-expanded", "true");
    const firstLink = menu.querySelector("a, button");
    if (firstLink) firstLink.focus();
  };

  const close = () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.focus();
  };

  openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) close();
  });
}

function setupCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

export function initNav() {
  markActiveLink();
  setupMobileMenu();
  setupCurrentYear();
}
