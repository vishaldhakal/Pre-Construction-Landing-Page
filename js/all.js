const readm = document.querySelector(".read-m-btn");
const mt = document.querySelector(".more-text");

readm.addEventListener("click", () => {
  mt.classList.remove("d-none");
  readm.classList.add("d-none");
});
