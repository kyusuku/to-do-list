import "./styles.css";

import { displayNewCourse, newCourseBtn } from "./course.js";
import { displayNewTodo, newTodoBtn } from "./todo.js";

import { compareAsc, format } from "date-fns";

const allCourseBtn = document.querySelector('.all-courses');

class Todo {
    constructor(title, description, dueDate, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checklist = checklist;
        this.added = false;
    }
}

let allCourses = [];

newCourseBtn.addEventListener('click', () => {
    displayNewCourse();
});

newTodoBtn.addEventListener('click', () => {
    displayNewTodo();
});