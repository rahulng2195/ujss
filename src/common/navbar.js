import { getSiblings, fadeIn, fadeOut } from "./customFunctions";

export const handleDropdown = (e) => {
  const target = e.target;
  const parent = target.parentElement;

  if (parent.classList.contains("dropdown-submenu")) {
    e.stopPropagation();
    parent.classList.toggle("show");
    parent.querySelector(".dropdown-menu").classList.toggle("show");
  } else {
    getSiblings(parent)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    parent.classList.toggle("show");
    target.setAttribute("aria-expanded", true);
    parent.childNodes[1].classList.toggle("show");
  }
};

export const handleMobileDropdown = (e) => {
  document
    .getElementById("navbarSupportedContent")
    .classList.toggle("show-with-trans");
};

// export const handleSearch = () => {
//   let searchForm = document.querySelector(".navbar .search .search-form");
//   document
//     .querySelector(".navbar .search .icon")
//     .addEventListener("click", function () {
//       searchForm.style.display = "block";
//       fadeIn(searchForm, 200);
//     });

//   document
//     .querySelector(".navbar .search .search-form .close")
//     .addEventListener("click", function () {
//       searchForm.style.display = "none";
//       fadeOut(searchForm, 200);
//     });
// };
