import { createDeleteBtn } from "./delete.js";
import { createConfirmBtn } from "./confirm.js";
import { compareAsc } from "date-fns";

const todoContent = document.querySelector('.todo-content');
const newTodoBtn = document.querySelector('#newTodoBtn');

class Todo {
    constructor(title, description, dueDate, checklist, course) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checklist = checklist;
        this.course = course;
    }
}

let allTodos = [];

function renderTodos(Todos) {
    todoContent.innerHTML = '';
    Todos.forEach(todo => {
        let todoDiv = document.createElement('div');
        let todoChecklist = document.createElement('input');
        todoChecklist.setAttribute('type', 'checkbox');
        todoChecklist.setAttribute('id', 'input-checklist');
        todoChecklist.checked = todo.checklist;

        let todoTitle = document.createElement('input');
        todoTitle.setAttribute('type', 'text');
        todoTitle.setAttribute('id', 'input-title');
        todoTitle.value = todo.title;
        todoTitle.setAttribute('readonly', 'true');

        let todoDue = document.createElement('input');
        todoDue.setAttribute('type', 'date');
        todoDue.setAttribute('id', 'input-due');
        todoDue.value = todo.dueDate;
        todoDue.setAttribute('readonly', 'true');

        let todoCourse = document.createElement('input');
        todoCourse.setAttribute('type', 'text');
        todoCourse.setAttribute('id', 'course-name');
        todoCourse.value = todo.course;
        todoCourse.setAttribute('readonly', 'true');

        let todoDesc = document.createElement('input');
        todoDesc.setAttribute('type', 'text');
        todoDesc.setAttribute('id', 'input-desc');
        todoDesc.value = todo.description;
        todoDesc.setAttribute('readonly', 'true');

        let deleteTodoBtn = createDeleteBtn();
        deleteTodoBtn.classList.add('confirmed');

        deleteTodoBtn.addEventListener('click', () => {
            allTodos = allTodos.filter(t => t !== todo);
            renderTodos(allTodos);
        });

        todoChecklist.addEventListener('change', function () {
            if (this.checked) {
                allTodos = allTodos.filter(t => t !== todo);
                renderTodos(allTodos);
            }
        });

        todoDiv.appendChild(todoChecklist);
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDue);
        todoDiv.appendChild(todoCourse);
        todoDiv.appendChild(todoDesc);
        todoDiv.appendChild(deleteTodoBtn);

        todoContent.appendChild(todoDiv);
    });
}

function displayNewTodo() {
    newTodoBtn.setAttribute('disabled', 'true');

    let newTodoDiv = document.createElement('div');

    let newTodoChecklist = document.createElement('input');
    newTodoChecklist.setAttribute('type', 'checkbox');
    newTodoChecklist.setAttribute('id', 'input-checklist');

    let newTodoTitle = document.createElement('input');
    newTodoTitle.setAttribute('type', 'text');
    newTodoTitle.setAttribute('placeholder', 'Assignment Name');
    newTodoTitle.setAttribute('id', 'input-title');

    let newTodoDue = document.createElement('input');
    newTodoDue.setAttribute('type', 'date');
    newTodoDue.setAttribute('id', 'input-due');

    let newTodoCourse = document.createElement('input');
    newTodoCourse.setAttribute('type', 'text');
    newTodoCourse.setAttribute('placeholder', 'Course Name');
    newTodoCourse.setAttribute('id', 'course-name');

    let newTodoDesc = document.createElement('input');
    newTodoDesc.setAttribute('type', 'text');
    newTodoDesc.setAttribute('placeholder', 'Description');
    newTodoDesc.setAttribute('id', 'input-desc');

    let deleteTodoBtn = createDeleteBtn();
    let confirmBtn = createConfirmBtn();

    newTodoCourse.addEventListener('keypress', function (event) {
        if (event.key === "Enter" && this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });
        
    newTodoCourse.addEventListener('blur', function () {
        if (this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });

    newTodoTitle.addEventListener('keypress', function (event) {
        if (event.key === "Enter" && this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });
        
    newTodoTitle.addEventListener('blur', function () {
        if (this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });

    newTodoDesc.addEventListener('keypress', function (event) {
        if (event.key === "Enter" && this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });
        
    newTodoDesc.addEventListener('blur', function () {
        if (this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });

    newTodoDue.addEventListener('keypress', function (event) {
        if (event.key === "Enter" && this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });
        
    newTodoDue.addEventListener('blur', function () {
        if (this.value.trim() !== "" && this.getAttribute('readonly') !== 'true') {
            this.setAttribute("readonly", "true");
            this.classList.add('filled');
        }
    });

    newTodoDiv.appendChild(newTodoChecklist);
    newTodoDiv.appendChild(newTodoTitle);
    newTodoDiv.appendChild(newTodoDue);
    newTodoDiv.appendChild(newTodoCourse);
    newTodoDiv.appendChild(newTodoDesc);
    newTodoDiv.appendChild(deleteTodoBtn);
    newTodoDiv.appendChild(confirmBtn);

    todoContent.appendChild(newTodoDiv);

    confirmBtn.addEventListener('click', () => {
        let newTodo = new Todo(newTodoTitle.value, newTodoDesc.value, newTodoDue.value, newTodoChecklist.checked, newTodoCourse.value);
        allTodos.push(newTodo);
        newTodoBtn.removeAttribute('disabled');
        newTodoDiv.removeChild(confirmBtn);
        deleteTodoBtn.classList.add('confirmed');

        allTodos.sort((a, b) => compareAsc(new Date(a.dueDate), new Date(b.dueDate)));
        renderTodos(allTodos);
    });

    deleteTodoBtn.addEventListener('click', () => {
        todoContent.removeChild(newTodoDiv);
        newTodoBtn.removeAttribute('disabled');
        allTodos = allTodos.filter(todo => todo.title !== newTodoTitle.value || todo.description !== newTodoDesc.value || todo.dueDate !== newTodoDue.value || todo.course !== newTodoCourse.value);
    })

    newTodoChecklist.addEventListener('change', function () {
        if (this.checked) {
            todoContent.removeChild(newTodoDiv);
            newTodoBtn.removeAttribute('disabled');
            allTodos = allTodos.filter(todo => todo.title !== newTodoTitle.value || todo.description !== newTodoDesc.value || todo.dueDate !== newTodoDue.value || todo.course !== newTodoCourse.value);
        }
    });
}

export { displayNewTodo, newTodoBtn, allTodos, renderTodos }