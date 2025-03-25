import { createDeleteBtn } from "./delete.js";
import { createEditIcon } from "./edit.js";
import { allTodos, renderTodos } from "./todo.js";

const coursesContent = document.querySelector(".courses-content");
let newCourseBtn = document.querySelector("#newCourseBtn");
const allCourseBtn = document.querySelector(".all-courses");

let allCourses = [];

allCourseBtn.addEventListener("click", function () {
  renderTodos(allTodos);
});

function getRandomPastelColor() {
  const r = Math.floor(Math.random() * 127 + 128);
  const g = Math.floor(Math.random() * 127 + 128);
  const b = Math.floor(Math.random() * 127 + 128);
  return `rgb(${r}, ${g}, ${b})`;
}

function saveCourses() {
  localStorage.setItem("allCourses", JSON.stringify(allCourses));
}

function renderCourses(courses) {
  courses.forEach((course) => {
    let newCourseDiv = document.createElement("div");
    let newCourseInput = document.createElement("input");

    let editIcon = createEditIcon();
    let deleteCourseBtn = createDeleteBtn();
    deleteCourseBtn.setAttribute("id", "deleteCourseBtn");

    newCourseInput.setAttribute("type", "text");
    newCourseInput.setAttribute("readonly", "true");
    newCourseInput.value = course;
    newCourseInput.classList.add("filled");

    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(editIcon);
    newCourseDiv.appendChild(deleteCourseBtn);
    newCourseDiv.style.backgroundColor = getRandomPastelColor();
    newCourseDiv.style.marginBottom = "20px";
    newCourseDiv.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
    newCourseInput.style.width = "275px";

    let oldCoursename = "";

    newCourseInput.addEventListener("keypress", function (event) {
      if (
        event.key === "Enter" &&
        this.value.trim() !== "" &&
        this.getAttribute("readonly") !== "true"
      ) {
        this.setAttribute("readonly", "true");
        newCourseDiv.appendChild(editIcon);
        newCourseDiv.appendChild(deleteCourseBtn);
        newCourseDiv.style.backgroundColor = getRandomPastelColor();
        newCourseDiv.style.marginBottom = "20px";
        newCourseDiv.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
        newCourseInput.style.width = "275px";

        newCourseBtn.removeAttribute("disabled");
        newCourseBtn.classList.remove("hide");

        if (oldCoursename !== "") {
          const index = allCourses.findIndex(
            (course) => course === oldCoursename,
          );
          if (index !== -1) {
            allCourses[index] = newCourseInput.value;
            saveCourses();
          }
        } else {
          allCourses.push(newCourseInput.value);
          saveCourses();
        }
      }
    });

    newCourseInput.addEventListener("blur", function () {
      if (
        this.value.trim() !== "" &&
        this.getAttribute("readonly") !== "true"
      ) {
        this.setAttribute("readonly", "true");
        newCourseDiv.appendChild(editIcon);
        newCourseDiv.appendChild(deleteCourseBtn);
        newCourseDiv.style.backgroundColor = getRandomPastelColor();
        newCourseDiv.style.marginBottom = "20px";
        newCourseDiv.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
        newCourseInput.style.width = "275px";

        newCourseBtn.removeAttribute("disabled");
        newCourseBtn.classList.remove("hide");

        if (oldCoursename !== "") {
          const index = allCourses.findIndex(
            (course) => course === oldCoursename,
          );
          if (index !== -1) {
            allCourses[index] = newCourseInput.value;
            saveCourses();
          }
        } else {
          allCourses.push(newCourseInput.value);
          saveCourses();
        }
      }
    });

    editIcon.addEventListener("click", function () {
      oldCoursename = newCourseInput.value;

      newCourseInput.removeAttribute("readonly");
      newCourseInput.classList.remove("filled");
      newCourseInput.style.borderBottom = "none";
      newCourseInput.style.color = "black";
      newCourseInput.focus();

      saveCourses();
    });

    deleteCourseBtn.addEventListener("click", () => {
      coursesContent.removeChild(newCourseDiv);
      allCourses = allCourses.filter((c) => c !== course);
      saveCourses();
    });

    newCourseDiv.addEventListener("click", (event) => {
      let target = event.target.id;

      if (target !== "deleteCourseBtn") {
        if (newCourseInput.getAttribute("readonly") === "true") {
          let courseName = newCourseInput.value;
          let courseTodos = allTodos.filter(
            (todo) => todo.course === courseName,
          );
          renderTodos(courseTodos);
        }
      }
    });

    coursesContent.insertBefore(newCourseDiv, newCourseBtn);
  });
}

function displayNewCourse() {
  newCourseBtn.setAttribute("disabled", "true");

  let newCourseDiv = document.createElement("div");
  let newCourseInput = document.createElement("input");

  let editIcon = createEditIcon();
  let deleteCourseBtn = createDeleteBtn();
  deleteCourseBtn.setAttribute("id", "deleteCourseBtn");

  newCourseInput.setAttribute("type", "text");
  newCourseInput.setAttribute("placeholder", "New Course");

  newCourseInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      this.classList.add("filled");
    } else {
      this.classList.remove("filled");
    }
  });

  newCourseInput.addEventListener("keypress", function (event) {
    if (
      event.key === "Enter" &&
      this.value.trim() !== "" &&
      this.getAttribute("readonly") !== "true"
    ) {
      this.setAttribute("readonly", "true");
      newCourseDiv.appendChild(editIcon);
      newCourseDiv.appendChild(deleteCourseBtn);
      newCourseDiv.style.backgroundColor = getRandomPastelColor();
      newCourseDiv.style.marginBottom = "20px";
      newCourseDiv.style.boxShadow =
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
      newCourseInput.style.width = "275px";

      newCourseBtn.removeAttribute("disabled");
      newCourseBtn.classList.remove("hide");

      if (oldCoursename !== "") {
        const index = allCourses.findIndex(
          (course) => course === oldCoursename,
        );
        if (index !== -1) {
          allCourses[index] = newCourseInput.value;
          saveCourses();
        }
      } else {
        allCourses.push(newCourseInput.value);
        saveCourses();
      }
    }
  });

  newCourseInput.addEventListener("blur", function () {
    if (this.value.trim() !== "" && this.getAttribute("readonly") !== "true") {
      this.setAttribute("readonly", "true");
      newCourseDiv.appendChild(editIcon);
      newCourseDiv.appendChild(deleteCourseBtn);
      newCourseDiv.style.backgroundColor = getRandomPastelColor();
      newCourseDiv.style.marginBottom = "20px";
      newCourseDiv.style.boxShadow =
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
      newCourseInput.style.width = "275px";

      newCourseBtn.removeAttribute("disabled");
      newCourseBtn.classList.remove("hide");

      if (oldCoursename !== "") {
        const index = allCourses.findIndex(
          (course) => course === oldCoursename,
        );
        if (index !== -1) {
          allCourses[index] = newCourseInput.value;
          saveCourses();
        }
      } else {
        allCourses.push(newCourseInput.value);
        saveCourses();
      }
    }
  });

  newCourseInput.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
  });

  newCourseInput.addEventListener("blur", function () {
    this.setAttribute("placeholder", "New Course");
  });

  let oldCoursename = "";

  editIcon.addEventListener("click", function () {
    oldCoursename = newCourseInput.value;

    newCourseInput.removeAttribute("readonly");
    newCourseInput.classList.remove("filled");
    newCourseInput.style.borderBottom = "none";
    newCourseInput.style.color = "black";
    newCourseInput.focus();
  });

  deleteCourseBtn.addEventListener("click", () => {
    coursesContent.removeChild(newCourseDiv);

    allCourses.filter((course) => course !== newCourseInput.value);
  });

  newCourseDiv.appendChild(newCourseInput);

  coursesContent.insertBefore(newCourseDiv, newCourseBtn);

  newCourseDiv.addEventListener("click", (event) => {
    let target = event.target.id;

    if (target !== "deleteCourseBtn") {
      if (newCourseInput.getAttribute("readonly") === "true") {
        let courseName = newCourseInput.value;
        let courseTodos = allTodos.filter((todo) => todo.course === courseName);
        renderTodos(courseTodos);
      }
    }
  });
}

export { displayNewCourse, newCourseBtn, allCourses, renderCourses };
