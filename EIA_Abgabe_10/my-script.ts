const addButton:HTMLElement = document.querySelector('#addButton');
const toDoInput:HTMLInputElement = document.querySelector('#toDoInput');
const toDosContainer:HTMLElement = document.querySelector('.toDos')
let toDoCounter:number = 0;

function handleDeleteTask(event) {
    toDosContainer.removeChild(event.currentTarget.parentElement)
    toDoCounter--
    displayCounter(toDoCounter);
}

function handleStatus(event) {
    
    event.currentTarget.innerHTML = 'undo';
}

function displayCounter(counter:Number) {
    document.querySelector('.counter').innerHTML = `${counter} in Total`
}

function addToDo():void {
    const toDoElement:HTMLElement = document.createElement('div');
    const text: HTMLElement = document.createElement('p');
    const deleteButton: HTMLElement = document.createElement('button');
    const finishedButton: HTMLElement = document.createElement('button')
    text.innerText = toDoInput.value;
    finishedButton.innerText = 'done'
    deleteButton.innerText = 'delete'
    toDoElement.classList.add('toDo');
    finishedButton.classList.add('statusButton', 'finished')
    deleteButton.classList.add('deleteButton')

    toDoElement.appendChild(text)
    toDoElement.appendChild(finishedButton)
    toDoElement.appendChild(deleteButton)
    toDosContainer.appendChild(toDoElement);
    toDoCounter++;
    displayCounter(toDoCounter);
    toDoInput.value = '';

    const statusButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.statusButton');
    statusButtons.forEach(function(statusBtn){
        statusBtn.addEventListener("click", handleStatus);
    })
    
    const deleteButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(function(deleteBtn){
        deleteBtn.addEventListener("click", handleDeleteTask);
    })
}

addButton.addEventListener('click', addToDo);

