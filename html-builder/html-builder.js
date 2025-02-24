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

export {select}
