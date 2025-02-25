import { select } from "./../../html-builder/html-builder.js";

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
  
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  };
  
  export { loadTasks };
  