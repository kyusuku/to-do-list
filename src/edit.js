import pencilIcon from "./icons/pencil.svg";

export function createEditIcon() {
  let editIcon = document.createElement("img");
  editIcon.src = pencilIcon;
  editIcon.alt = "Edit course name icon";
  editIcon.classList.add("edit-icon");
  editIcon.setAttribute("width", "20px");
  editIcon.setAttribute("height", "20px");

  return editIcon;
}
