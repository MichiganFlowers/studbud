//Define Variables
const quadForm = document.getElementById("quadrantForm");
const submitButton = document.querySelector("#quadrantForm > button")
var urgentImportantInput = document.getElementById("urgentImportantInput");
let tasklist2 = document.getElementById("tasklist2");

var notUrgentImportantInput = document.getElementById("notUrgentImportantInput");
var urgentNotImportantInput = document.getElementById("urgentNotImportantInput");
var notUrgentNotImportantInput = document.getElementById("notUrgentNotImportantInput");

quadForm.addEventListener("submit", function(event){
  event.preventDefault();
  let urgentImportant = urgentImportantInput.value;
  let notUrgentImportant = notUrgentImportantInput.value;
  let urgentNotImportant = urgentNotImportantInput.value;
  let notUrgentNotImportant = notUrgentNotImportantInput.value;
  addTask2(urgentImportant, notUrgentImportant, urgentNotImportant, notUrgentNotImportant, false);
  console.log(tasklist2);
})

var taskList2Array = [];

function addTask2(urgentImportant, notUrgentImportant, urgentNotImportant, notUrgentNotImportant) {
  let quadrant = {
    id: Date.now(),
    urgentImportant,
    notUrgentImportant,
    urgentNotImportant,
    notUrgentNotImportant
  };
  taskList2Array.push(quadrant);
  renderTask2(quadrant);
}

function renderTask2(quadrant){

updateEmpty();
//Create HTML elements
let item = document.createElement("li");
  item.setAttribute('data-id', quadrant.id);
  item.innerHTML = "<p>" + quadrant.urgentImportant + "<br>" + quadrant.notUrgentImportant + "<br>" + quadrant.urgentNotImportant + "<br>" + quadrant.notUrgentNotImportant + "<br>" +  "</p>";

  
  tasklist2.appendChild(item);

 let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event){
    event.preventDefault();

    let id = event.target.parentElement.getAttribute('data-id');

    let index = taskList2Array.findIndex(task => task,id === Number(id));
    removeItemFromArray(taskList2Array, index);

    updateEmpty();
    item.remove();
  })

   quadForm.reset();
}

function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty(){
  if (taskList2Array.length > 0){
    document.getElementById('emptyList2').style.display = 'none';
  } else {
    document.getElementById('emptyList2').style.display= 'block';
  }
}