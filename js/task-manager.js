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

    addButton.addEventListener("click", function() {
        let task = taskInput.value.trim();

        if (task !== "") {
            myTasks.push(task);

        let listItem = document.createElement("li");
            listItem.textContent = task;

            userTasks.appendChild(listItem);

            taskInput.value = "";
    }
});