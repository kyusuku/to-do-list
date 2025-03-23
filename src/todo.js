import { createDeleteBtn } from "./delete.js";

const todoContent = document.querySelector('.todo-content');
const newTodoBtn = document.querySelector('#newTodoBtn');

function displayNewTodo() {
    newTodoBtn.setAttribute('disabled', 'true');

    let newTodoDiv = document.createElement('div');

    let newTodoChecklist = document.createElement('input');
    newTodoChecklist.setAttribute('type', 'checkbox');

    let newTodoTitle = document.createElement('input');
    newTodoTitle.setAttribute('type', 'text');
    newTodoTitle.setAttribute('placeholder', 'Assignment Name');
    newTodoTitle.setAttribute('id', 'input-title');

    let newTodoDue = document.createElement('input');
    newTodoDue.setAttribute('type', 'date');

    let newTodoDesc = document.createElement('input');
    newTodoDesc.setAttribute('type', 'text');
    newTodoDesc.setAttribute('placeholder', 'Description');
    newTodoDesc.setAttribute('id', 'input-desc');

    let deleteTodoBtn = createDeleteBtn();

    newTodoDiv.appendChild(newTodoChecklist);
    newTodoDiv.appendChild(newTodoTitle);
    newTodoDiv.appendChild(newTodoDue);
    newTodoDiv.appendChild(newTodoDesc);
    newTodoDiv.appendChild(deleteTodoBtn);

    todoContent.appendChild(newTodoDiv);
}

export { displayNewTodo, newTodoBtn }