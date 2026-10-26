function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate the weekly goal based on the daily goal and bonus tasks
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;
    let output = userName + ", your weekly task goal is " + totalGoal + " tasks.";

    document.getElementById("goal-message").innerHTML = output;

}

// Get form values and calculate the weekly goal when the button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {

    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);

});

let myTasks = [];
let taskList = document.getElementById("task-list");
let userTasks = document.createElement("ul");

userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

let addButton = document.getElementById("add-task");
let taskInput = document.getElementById("task-name");
let priorityInput = document.getElementById("task-priority");
let importantInput = document.getElementById("task-important");
let deleteButton = document.getElementById("delete-list");

function displayTasks() {
    userTasks.innerHTML = "";

    for (let i = 0; i < myTasks.length; i++) {
        let task = myTasks[i];
        let listItem = document.createElement("li");
        let taskText = document.createElement("span");
        let completeCheckbox = document.createElement("input");
        let deleteTaskButton = document.createElement("button");

        taskText.textContent = task.name + " - " + task.priority;

        if (task.isImportant) {
            listItem.style.color = "red";
            listItem.style.fontWeight = "bold";
        }

        if (task.isCompleted) {
            taskText.style.textDecoration = "line-through";
        }

        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = task.isCompleted;

        completeCheckbox.addEventListener("change", function() {
            task.isCompleted = completeCheckbox.checked;
            displayTasks();
            console.log(JSON.stringify(myTasks));
        });

        deleteTaskButton.textContent = "Delete";
        deleteTaskButton.type = "button";

        deleteTaskButton.addEventListener("click", function() {
            myTasks = myTasks.filter(function(item) {
                return item.id !== task.id;
            });

            displayTasks();
            console.log(JSON.stringify(myTasks));
        });

        listItem.appendChild(completeCheckbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteTaskButton);

        userTasks.appendChild(listItem);
    }
}

addButton.addEventListener("click", function() {
    let taskName = taskInput.value.trim();

    if (taskName !== "") {
        let newTask = {
            id: Date.now(),
            name: taskName,
            priority: priorityInput.value,
            isImportant: importantInput.checked,
            isCompleted: false
        };

        myTasks.push(newTask);

        displayTasks();
        console.log(JSON.stringify(myTasks));

        taskInput.value = "";
        importantInput.checked = false;
        priorityInput.value = "Medium";
    }
});

deleteButton.addEventListener("click", function() {
    myTasks = [];
    displayTasks();
    console.log(JSON.stringify(myTasks));
});