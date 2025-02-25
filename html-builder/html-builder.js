const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const header = document.createElement("div");
header.classList.add("header");
wrapper.appendChild(header);

const section = document.createElement("div");
section.classList.add("section");
wrapper.appendChild(section);

const select = document.createElement("select");
select.classList.add("select");
section.appendChild(select);

const taskContainer = document.createElement('div')
taskContainer.classList.add("task-container")
section.appendChild(taskContainer)

const textarea = document.createElement("textarea");
textarea.classList.add("task-input");
textarea.placeholder = `Enter text for task`;

const buttonSave = document.createElement("button")
buttonSave.classList.add("button")
buttonSave.textContent = "Save"
section.appendChild(buttonSave)

export {select, taskContainer, buttonSave, textarea}
