const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      let selector = e.target.classList[0];
      if (selector === "grandmother" || selector === "granddad") {
        typeFilter();
      } else {
        const markType = wrapper.querySelectorAll(`.${selector}`);
        typeFilter(markType);
      }
    });
  });

  menu.addEventListener("click", (e) => {
    let target = e.target;
    if (target) {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};

export default filter;
