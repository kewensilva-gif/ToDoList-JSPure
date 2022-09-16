function addTask(){
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);
        console.log(newTask);

        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list");

        list.appendChild(newTask); 
        
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            removeTask(this);
        });

        const doneBtn = newTask.querySelector(".done-btn");
        doneBtn.addEventListener("click", () => {
            completeTask(this);
        });

        document.querySelector("#task-title").value = "";
    }
}

function removeTask(task){
    task.parentNode.remove(true);
}

function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}


const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});
