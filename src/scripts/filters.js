/* Focus Frameworks — Filters
   Generic category filter for product / collection grids.
   No-op on pages without [data-filter] buttons.
*/

export function initFilters() {
  const containers = document.querySelectorAll("[data-filter-group]");
  if (!containers.length) return;

  containers.forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    const targetSelector = group.dataset.filterTarget || "[data-category]";
    const items = document.querySelectorAll(targetSelector);
    if (!buttons.length || !items.length) return;

    const apply = (filter) => {
      items.forEach((item) => {
        const cat = item.dataset.category;
        const show = filter === "all" || cat === filter;
        item.classList.toggle("is-hidden", !show);
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", active ? "true" : "false");
        });
        apply(filter);
      });
    });
  });
}
