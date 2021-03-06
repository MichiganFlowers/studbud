//Define variables
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput2");
let tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(tasklist);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
}

function renderTask(task){

updateEmpty();

  //Create HTML Elements



  let item = document.createElement("li");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<p>" + task.taskDescription + "<br>" + task.dueDate + "<br>" + task.dateCreated + "<br>" + task.estimatedTime + "<br>" + task.completionTime + "<br>" + task.priorityRating + "<br>" + task.estimatedTime + "<br>" + task.completionStatus + "<br>" + "</p>";

  
  tasklist.appendChild(item);

  //Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  //Event Listeners for DOM Elements
  delButton.addEventListener("click", function(event){
    event.preventDefault();

    let id = event.target.parentElement.getAttribute('data-id');

    let index = taskListArray.findIndex(task => task,id === Number(id));
    removeItemFromArray(taskListArray, index);

    updateEmpty();
    item.remove();
  })
  //Clear the input form
  form.reset();
}

function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty(){
  if (taskListArray.length > 0){
    document.getElementById('emptyList').style.display = 'none';
  } else {
    document.getElementById('emptyList').style.display= 'block';
  }
}

