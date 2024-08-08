console.log("From script.js File !!!");
// Access the Elements
const inputBox = document.querySelector('.input-box');
const addTask = document.querySelector('.add-task');
const markDone = document.querySelector('.checkbox');
const deleteTask = document.querySelector('.delete-task');
const taskContainer = document.querySelector('.task-container');
const seperateToDo = document.querySelector('.seperate-todo');
const todoText = document.querySelector('.todo');

// Function for Creating a ToDo
function createToDo() {
    const inputValue = inputBox.value.trim();
    if (inputValue === '') {
        return;
    }
    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('seperate-todo');
    const innerDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    const label = document.createElement('label');
    label.classList.add('todo');
    label.textContent = inputValue;
    innerDiv.appendChild(checkbox);
    innerDiv.appendChild(label);
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa', 'fa-trash', 'delete-task');
    deleteIcon.addEventListener('click', function() {
        taskContainer.removeChild(newTaskDiv);
    });
    newTaskDiv.appendChild(innerDiv);
    newTaskDiv.appendChild(deleteIcon);
    taskContainer.appendChild(newTaskDiv);
    inputBox.value = '';
    checkbox.addEventListener('change', markAsDone);
}
// Function for Marking ToDo as Done
function markAsDone(event) {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
    }
    else {
        label.style.textDecoration = 'none';
    }
}
// Creating Event Listeners for Both Buttons and CheckBox
addTask.addEventListener('click' , createToDo);
document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('change' , markAsDone);
})
