const taskInput = document.querySelector(".input");
const addButton = document.querySelector(".add");
const currentItems = document.querySelector(".list__item-current-task");
const completedItems = document.querySelector(".list__item-completed-task");

addButton.addEventListener("click" , () =>{
    addTask();
});

function addTask(){
    //create task div
    const task = document.createElement("div");
    task.innerHTML = `
                    <input type="checkbox">
                    <h1></h1>
                    <button>Edit</button>
                    <button>Delete</button>`;
    task.classList.add("task-box");
    // task-check
    const task__check = task.children[0];
    // task-text
    const task__text = task.children[1];
    task__text.classList.add("task-text");
    // editButton
    const editButton = task.children[2];
    editButton.classList.add("edit");
    // deleteButton 
    const deleteButton = task.children[3];
    deleteButton.classList.add("delete");
};