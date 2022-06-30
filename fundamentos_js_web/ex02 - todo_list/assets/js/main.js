const form = document.querySelector(".task-list-form");
const taskInput = form.querySelector(".task-input");
const taskList = document.querySelector(".task-list");
const storageTask = "allTasks";

form.addEventListener("submit", addNewTask);

const createLi = () => document.createElement("li");
const createButton = () => document.createElement("button");
const setTaskValue = (element, value) => (element.innerText = `🡆 ${value} `);

const removeTaskElement = (event) => {
  const TasksElement = event.target.parentElement;
  TasksElement.remove();
  saveTaskList();
};

const addTaskRemoveButton = (TaskItem) => {
  const removeButton = createButton();
  removeButton.innerText = "X";
  removeButton.classList.add("remove");
  removeButton.addEventListener("click", removeTaskElement);
  TaskItem.appendChild(removeButton);
};

const addTaskItem = (taskValue) => {
  const TaskItem = createLi();

  setTaskValue(TaskItem, taskValue);
  addTaskRemoveButton(TaskItem);
  taskList.appendChild(TaskItem);
};

const clearInputAndSetFocus = () => {
  taskInput.value = "";
  taskInput.focus();
};

const saveTaskList = () => {
  const allTasks = taskList.querySelectorAll("li");
  const allTaskValues = [];

  for (let task of allTasks) {
    let taskValue = task.innerText;
    taskValue = taskValue.replace("\nX", "").replace("🡆", "").trim();
    allTaskValues.push(taskValue);
  }

  const tasksJSON = JSON.stringify(allTaskValues);
  localStorage.setItem(storageTask, tasksJSON);
};

const recoverTaskList = () => {
  const oldTaskListJSON = localStorage.getItem(storageTask);
  const oldTaskList = JSON.parse(oldTaskListJSON);

  for (const tasksValue of oldTaskList) {
    addTaskItem(tasksValue);
  }
};

recoverTaskList();

function addNewTask(event) {
  event.preventDefault();
  if (!taskInput.value) return;

  const tasksValue = taskInput.value;

  addTaskItem(tasksValue);
  saveTaskList();
  clearInputAndSetFocus();
}
