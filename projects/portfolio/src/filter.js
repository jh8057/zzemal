const project_btn = document.querySelector(".myWork__buttons");
const proContainer = document.querySelector(".myWork__projects");
const projects = document.querySelectorAll(".project");
project_btn.addEventListener("click", (e) => {
  // btn color
  const selected = document.querySelector(".buttons__btn.active");
  const newselected =
    e.target.classList[0] === "buttons__btn"
      ? e.target
      : e.target.parentNode.classList[0] === "buttons__btn"
      ? e.target.parentNode
      : null;

  if (newselected !== null) {
    selected.classList.remove("active");
    newselected.classList.add("active");
  }

  //project filter
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  proContainer.classList.add("projectOpacity");

  proContainer.addEventListener("animationend", () => {
    projects.forEach((project) => {
      const type = project.dataset.type;
      if (filter === "*" || type.includes(filter)) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    proContainer.classList.remove("projectOpacity");
  });
});
