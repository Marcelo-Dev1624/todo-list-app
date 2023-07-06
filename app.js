
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('tasks-list-container');

function createTask(){

    if (inputBox.value === '')
    {
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");j
}

loadData();


// Get the input field
var input = document.getElementById("input-box");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(e) {
  // If the user presses the "Enter" key on the keyboard
  if (e.key === "Enter") {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-btn").click();
  }
});