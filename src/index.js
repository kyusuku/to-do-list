import "./styles.css";

import {
  displayNewCourse,
  newCourseBtn,
  allCourses,
  renderCourses,
} from "./course.js";
import { displayNewTodo, newTodoBtn, allTodos, renderTodos } from "./todo.js";

newCourseBtn.addEventListener("click", () => {
  newCourseBtn.classList.add("hide");
  displayNewCourse();
});

newTodoBtn.addEventListener("click", () => {
  displayNewTodo();
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  const storedTodos = localStorage.getItem("allTodos");
  const storedCourses = localStorage.getItem("allCourses");
  if (storedTodos) {
    const parsedTodos = JSON.parse(storedTodos);
    if (parsedTodos.length > 0) {
      allTodos.push(...parsedTodos);
      renderTodos(allTodos);
    }
  }
  if (storedCourses) {
    const parsedCourses = JSON.parse(storedCourses);
    if (parsedCourses.length > 0) {
      allCourses.push(...parsedCourses);
      renderCourses(allCourses);
    }
  }
}
