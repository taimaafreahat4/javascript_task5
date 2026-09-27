let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");
let clearButton = document.getElementById("clearButton");
// Get data from Local Storage
let arr = JSON.parse(localStorage.getItem("task")) || [];
// Display saved tasks
for(let i=0; i<arr.length; i++)
{
    listTask.innerHTML +=
    "<p>"
    + arr[i] +
    "<button onclick='deleteScreen(this)'>Delete Screen</button>"
    +
    "<button onclick='deleteLocal(this)'>Delete Local</button>"
    +
    "</p>";
}
// Add New Task
addButton.onclick = function()
{
    let task = inputText.value;
    if(task == "")
    {
        return;
    }
    arr.push(task);
    localStorage.setItem(
        "task",
        JSON.stringify(arr)
    );
    listTask.innerHTML +=
    "<p>"
    + task +
    "<button onclick='deleteScreen(this)'>Delete Screen</button>"
    +
    "<button onclick='deleteLocal(this)'>Delete Local</button>"
    +
    "</p>";
    inputText.value="";
}
// Delete From Screen Only

function deleteScreen(button)
{
    button.parentElement.remove();
}
// Delete From Local Storage

function deleteLocal(button)
{
    let taskName =
    button.parentElement.firstChild.textContent.trim();
    arr = arr.filter(function(task){
        return task != taskName;
    });
    localStorage.setItem(
        "task",
        JSON.stringify(arr)
    );
    button.parentElement.remove();
}



// Delete All Tasks

clearButton.onclick=function()
{
    localStorage.removeItem("task");
    listTask.innerHTML="";
}