import { buttonSave, select, taskContainer } from "../html-builder/html-builder.js";

const saveTask = () => {
  const taskKey = select.value;
  const textarea = taskContainer.querySelector("textarea");;

  const taskContent = textarea ? textarea.value : "";

  localStorage.setItem(taskKey, taskContent);
  console.log(`Saved task: Key = ${taskKey}, Content = ${taskContent}`);
};

buttonSave.addEventListener("click", saveTask);

export { saveTask };

