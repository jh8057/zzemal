const project_btn = document.querySelector(".myWork__buttons");
const proContainer = document.querySelector(".myWork__projects");
const projects = document.querySelectorAll(".project");
project_btn.addEventListener("click", (e) => {
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
