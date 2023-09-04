const map = document.querySelector(".map");
const circles = document.querySelectorAll(".circle");

map.addEventListener("click", (e) => {
  const el = e.target.closest(".circle");
  if (!el) circles.forEach((i) => removeClass(i));
  el.classList.toggle("open");
  el.classList.contains("open")
    ? (el.firstChild.textContent = "-")
    : (el.firstChild.textContent = "+");
});

function removeClass(item) {
  item.classList.remove("open");
  item.firstChild.textContent = "+";
}
