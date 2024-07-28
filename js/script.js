document.addEventListener("DOMContentLoaded", () => {
    let searchBtn = document.querySelector(".search__btn")
    let searchInput = document.querySelector(".search__input")
    searchBtn.addEventListener("click", ()=> {
        searchBtn.classList.toggle("search__btn--active")
        searchInput.classList.toggle("search__input--active")
    })
  });