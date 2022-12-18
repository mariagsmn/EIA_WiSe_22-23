const addButton = document.querySelector('#addButton');
const toDoInput = document.querySelector('#toDoInput');
const toDosContainer = document.querySelector('.toDos');
let toDoCounter = 0;
function handleDeleteTask(event) {
    toDosContainer.removeChild(event.currentTarget.parentElement);
    toDoCounter--;
    displayCounter(toDoCounter);
}
function handleStatus(event) {
    event.currentTarget.innerHTML = 'undo';
}
function displayCounter(counter) {
    document.querySelector('.counter').innerHTML = `${counter} in Total`;
}
function addToDo() {
    const toDoElement = document.createElement('div');
    const text = document.createElement('p');
    const deleteButton = document.createElement('button');
    const finishedButton = document.createElement('button');
    text.innerText = toDoInput.value;
    finishedButton.innerText = 'done';
    deleteButton.innerText = 'delete';
    toDoElement.classList.add('toDo');
    finishedButton.classList.add('statusButton', 'finished');
    deleteButton.classList.add('deleteButton');
    toDoElement.appendChild(text);
    toDoElement.appendChild(finishedButton);
    toDoElement.appendChild(deleteButton);
    toDosContainer.appendChild(toDoElement);
    toDoCounter++;
    displayCounter(toDoCounter);
    toDoInput.value = '';
    const statusButtons = document.querySelectorAll('.statusButton');
    statusButtons.forEach(function (statusBtn) {
        statusBtn.addEventListener("click", handleStatus);
    });
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(function (deleteBtn) {
        deleteBtn.addEventListener("click", handleDeleteTask);
    });
}
addButton.addEventListener('click', addToDo);
//# sourceMappingURL=my-script.js.map