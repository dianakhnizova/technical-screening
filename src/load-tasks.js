import { select, taskContainer } from "./../../html-builder/html-builder.js";

const loadTasks = async () => {
  try {
    const response = await fetch("./../../sources/tasks.json");
    const taskData = await response.json();

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select task";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    taskData.forEach((task) => {
      const option = document.createElement("option");
      option.value = task.value;
      option.textContent = task.text;
      select.appendChild(option);
    });

    select.addEventListener("change", loadSavedTask);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
};

const loadSavedTask = () => {
  const taskKey = select.value;
  const savedContent = localStorage.getItem(taskKey) || "";

  taskContainer.innerHTML = ""; 

  const textarea = document.createElement("textarea");
  textarea.classList.add("task-input");
  textarea.placeholder = `Enter text for task`;
  textarea.value = savedContent;

  taskContainer.appendChild(textarea);
};

export { loadTasks };
