let lists = document.querySelectorAll(".list");
let boxes = document.querySelectorAll(".box");

lists.forEach((e) => {
  e.addEventListener("dragstart", () => [e.classList.add("dragging")]);
  e.addEventListener("dragend", () => [e.classList.remove("dragging")]);
});

boxes.forEach((e) => {
  e.addEventListener("dragover", () => {
    let element = document.querySelector(".dragging");
    e.appendChild(element);
  });
  e.addEventListener("dragenter", () => {
    e.style.background = "red";
  });
  e.addEventListener("dragleave", () => {
    e.style.background = "";
  });
});
