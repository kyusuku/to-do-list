import "./styles.css";

import pencilIcon from "./icons/pencil.svg";
import closeIcon from "./icons/close-box.svg";

const newCourseBtn = document.querySelector('#newCourseBtn');
const newTodoBtn = document.querySelector('#newTodoBtn');

class Todo {
    constructor(title, description, dueDate, priority, course, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.course = course;
        this.checklist = checklist;
        this.added = false;
    }

    setComplete() {

    }

    changePriority() {

    }

    delete() {

    }
}

let allCourses = [];

newCourseBtn.addEventListener('click', () => {
    createNewCourse();
});

newTodoBtn.addEventListener('click', () => {
    createNewTodo();
});

const coursesContent = document.querySelector('.courses-content');

function getRandomPastelColor() {
    const r = Math.floor(Math.random() * 127 + 128);
    const g = Math.floor(Math.random() * 127 + 128);
    const b = Math.floor(Math.random() * 127 + 128);
    return `rgb(${r}, ${g}, ${b})`;
}

function createEditIcon() {
    let editIcon = document.createElement('img');
    editIcon.src = pencilIcon;
    editIcon.alt = "Edit course name icon";
    editIcon.classList.add("edit-icon");
    editIcon.setAttribute('width', '20px');
    editIcon.setAttribute('height', '20px');

    return editIcon;
}

function createDeleteBtn() {
    let deleteBtn = document.createElement('img');
    deleteBtn.src = closeIcon;
    deleteBtn.alt = "Delete course icon";
    deleteBtn.classList.add("delete-course-btn");
    deleteBtn.setAttribute('width', '20px');
    deleteBtn.setAttribute('height', '20px');

    return deleteBtn;
}

function createNewCourse() {
    newCourseBtn.setAttribute('disabled', 'true');

    let newCourseDiv = document.createElement('div');
    let newCourseInput = document.createElement('input');

    let editIcon = createEditIcon();
    let deleteCourseBtn = createDeleteBtn();

    newCourseInput.setAttribute('type', 'text');
    newCourseInput.setAttribute('placeholder', 'New Course');

    newCourseInput.addEventListener('input', function () {
        if (this.value.trim() !== "") {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
    });

    newCourseInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter" && this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            newCourseDiv.appendChild(editIcon);
            newCourseDiv.appendChild(deleteCourseBtn);
            newCourseDiv.style.backgroundColor = getRandomPastelColor();
            newCourseDiv.style.marginBottom = '20px';
            newCourseDiv.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
            newCourseInput.style.width = "275px";

            newCourseBtn.removeAttribute('disabled');
        }
    });
    
    newCourseInput.addEventListener('blur', function () {
        if (this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            newCourseDiv.appendChild(editIcon);
            newCourseDiv.appendChild(deleteCourseBtn);
            newCourseDiv.style.backgroundColor = getRandomPastelColor();
            newCourseDiv.style.marginBottom = '20px';
            newCourseDiv.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
            newCourseInput.style.width = "275px";

            newCourseBtn.removeAttribute('disabled');
        }
    });

    newCourseInput.addEventListener('focus', function () {
        this.setAttribute('placeholder', '');
    });

    newCourseInput.addEventListener('blur', function () {
        this.setAttribute('placeholder', 'New Course');
    });

    editIcon.addEventListener('click', function () {
        newCourseInput.removeAttribute('readonly');
        newCourseInput.classList.remove('filled');
        newCourseInput.style.borderBottom = 'none';
        newCourseInput.style.color = 'black';
        newCourseInput.focus();
    });

    deleteCourseBtn.addEventListener('click', () => {
        coursesContent.removeChild(newCourseDiv);
    });
    
    newCourseDiv.appendChild(newCourseInput);
    coursesContent.appendChild(newCourseDiv);
};

function createNewTodo() {
    newTodoBtn.setAttribute('disabled', 'true');

    let newTodoDiv = document.createElement('div');
    let newTodoInput = document.createElement('input');

    let editIcon = createEditIcon();
    let deleteTodoBtn = createDeleteBtn();


}