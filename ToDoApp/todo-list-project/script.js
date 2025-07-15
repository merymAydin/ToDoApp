const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
  updateCounters();
}

function addTask(){
    const task = inputBox.value.trim();
    if(!task)
    {
        alert("Please enter a task");
        return;
    }

const li = document.createElement("li");
li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;
listContainer.appendChild(li);
inputBox.value="";

const taskSpan = li.querySelector("span");
const checkbox = li.querySelector("input");
checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
  updateCounters();
});

const editBtn =  li.querySelector(".edit-btn");
editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("completed");
    checkbox.checked = false;
    updateCounters();
  }
});



const deleteBtn = li.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});




}