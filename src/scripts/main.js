/* Focus Frameworks — Main
   Entry point. Loads shared components, then initializes nav and animations.
*/

import { initNav } from "/src/scripts/nav.js";
import { initAnimations } from "/src/scripts/animations.js";
import { initFilters } from "/src/scripts/filters.js";

async function loadComponent(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    target.innerHTML = await res.text();
  } catch (err) {
    console.warn(`[FF] Failed to load ${url}:`, err);
  }
}

async function boot() {
  await Promise.all([
    loadComponent('[data-slot="nav"]', "/src/components/nav.html"),
    loadComponent('[data-slot="footer"]', "/src/components/footer.html"),
  ]);
  initNav();
  initAnimations();
  initFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
