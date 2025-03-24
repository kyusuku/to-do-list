import "./styles.css";

import { displayNewCourse, newCourseBtn } from "./course.js";
import { displayNewTodo, newTodoBtn } from "./todo.js";

newCourseBtn.addEventListener('click', () => {
    newCourseBtn.classList.add('hide');
    displayNewCourse();
});

newTodoBtn.addEventListener('click', () => {
    displayNewTodo();
});