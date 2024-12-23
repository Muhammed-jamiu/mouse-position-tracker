const body = document.querySelector("body");
const main = document.querySelector(".container");
const mousePosition = document.querySelector(".mouse-position");
const outPut = document.querySelector(".output");
main.addEventListener("mouseover", (e) => {
  mousePosition.classList.add("active");
});
main.addEventListener("mouseleave", () => {
  mousePosition.classList.remove("active");
});
main.addEventListener("mousemove", mouseTrack);
function mouseTrack() {
  const html = `Position X: ${event.clientX} | Postion Y: ${event.clientY}`;
  outPut.innerHTML = html;
  console.log(html);
}
