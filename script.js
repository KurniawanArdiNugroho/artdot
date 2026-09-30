/* ===== YOUR LINKS — paste real URLs between the quotes =====
   Email:    "mailto:you@example.com"
   WhatsApp: "https://wa.me/62XXXXXXXXXX"  (country code + number, no + or spaces)
   Leave a link as "" and its button stays inactive until you fill it in. */
const LINKS = {
  email: "kurniawanardi303@gmail.com",
  whatsapp: "https://wa.me/6285291133235",
  "99designs": "https://99designs.com/profiles/artdotcreative",
  upwork: "",
  instagram: "https://www.instagram.com/artdot.design?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  behance: "https://www.behance.net/kurniawnugroho",
  linkedin: "linkedin.com/in/kurniawan-ardi-nugroho-1035b342b"
};

document.querySelectorAll("[data-link]").forEach((a) => {
  const url = LINKS[a.dataset.link];
  if (url) {
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  } else {
    a.setAttribute("aria-disabled", "true");
    a.addEventListener("click", (e) => e.preventDefault());
  }
});

/* Mobile menu */
const btn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open);
  btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { setMenu(false); btn.focus(); } });

/* Header hairline appears after scrolling */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
