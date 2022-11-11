const getId = (id) => document.getElementById(`${id}`);
const container = document.querySelector(".container");
const inputSearch = document.querySelector(".inputSearch");
const btnSearch = getId("search");

btnSearch.addEventListener("click", () => {
  container.classList.toggle("active");
  inputSearch.focus();
});
