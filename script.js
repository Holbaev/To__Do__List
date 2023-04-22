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

      //add task
      task__text.innerHTML = taskInput.value;
      taskInput.value = "";
      currentItems.prepend(task);
     //edit task
     let edit = false;
     editButton.addEventListener("click" , () =>{
         if(edit){
             editButton.textContent = "Edit";
             task__text.removeAttribute("contentEditable");
         }
         else{
             editButton.textContent = "save";
             task__text.setAttribute("contentEditable" , true);
             task__text.focus();
         }
         edit = !edit;
     });
       //delete task
    deleteButton.addEventListener("click" , () =>{
        task.remove();
    });

    //check task
    task__check.addEventListener("click" , () =>{
        if(task__check.checked){
            completedItems.prepend(task);
            task__text.classList.add("active");
        }
        else{
            currentItems.prepend(task);
            task__text.classList.remove("active");
        }
    })
};