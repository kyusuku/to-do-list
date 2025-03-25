import closeIcon from "./icons/close-box.svg";

export function createDeleteBtn() {
  let deleteBtn = document.createElement("img");
  deleteBtn.src = closeIcon;
  deleteBtn.alt = "Delete course icon";
  deleteBtn.classList.add("delete-course-btn");
  deleteBtn.setAttribute("width", "20px");
  deleteBtn.setAttribute("height", "20px");

  return deleteBtn;
}
