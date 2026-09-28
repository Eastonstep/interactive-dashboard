// Possible answers for the Magic Eight Ball
const answers = [
    "It is certain.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "Ask again later.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Displays a random answer in the circle
function displayAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const circle = document.getElementById("circle");

    circle.innerHTML = answers[randomIndex];
    circle.style.display = "flex";
}

// Checks for a question when the ball is clicked
document.getElementById("ball").addEventListener("mousedown", function() {
    const question = document.getElementById("question").value;

    if (question === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

// Hides the answer when the reset button is clicked
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});