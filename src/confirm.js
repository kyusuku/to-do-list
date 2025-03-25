import confirmIcon from "./icons/check-box.svg";

export function createConfirmBtn() {
  let confirmBtn = document.createElement("img");
  confirmBtn.src = confirmIcon;
  confirmBtn.alt = "Confirm Todo icon";
  confirmBtn.classList.add("confirm-btn");
  confirmBtn.setAttribute("width", "20px");
  confirmBtn.setAttribute("height", "20px");

  return confirmBtn;
}
