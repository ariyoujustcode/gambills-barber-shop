const container = document.querySelector(".container");
const navlinks = document.querySelector(".navlinks");

container.addEventListener("click", () => {
  container.classList.toggle("active");
  navlinks.classList.toggle("active");
})

document.querySelectorAll(".navlinks").forEach(n => n.addEventListener("click", () => {
  container.classList.remove("active");
  navlinks.classList.remove("active");
}))
