const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const header = document.createElement("div");
header.classList.add("header");
wrapper.appendChild(header);

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
header.appendChild(logoContainer);

const navContainer = document.createElement("div");
navContainer.classList.add("nav-container");
header.appendChild(navContainer);

const ul = document.createElement("ul");
ul.classList.add("nav-list");
navContainer.appendChild(ul);

const navItems = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Tasks", url: "/services" },
  { text: "Contacts", url: "/contacts" },
];

navItems.forEach(({ text, url }) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  ul.appendChild(li);

  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = text;
  link.href = url;
  li.appendChild(link);
});

const section = document.createElement("div");
section.classList.add("section");
wrapper.appendChild(section);

const select = document.createElement("select");
select.classList.add("select");
section.appendChild(select);

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");
section.appendChild(taskContainer);

const textarea = document.createElement("textarea");
textarea.classList.add("task-input");
textarea.placeholder = `Enter text for task`;

const buttonSave = document.createElement("button");
buttonSave.classList.add("button");
buttonSave.textContent = "Save";
section.appendChild(buttonSave);

const footer = document.createElement("div");
footer.classList.add("footer");
wrapper.appendChild(footer);

const footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");
footer.appendChild(footerContainer);

const footerContacts = document.createElement("div");
footerContacts.classList.add("footer-contacts");
footerContainer.appendChild(footerContacts);

const linksData = [
  { href: "tel:+77072754341", text: "Phone" },
  { href: "mailto:khnizovad@gmail.com", text: "G-Mail", target: "_blank" },
  {
    href: "https://www.instagram.com/dianakhnizova/",
    text: "Instagram",
    target: "_blank",
  },
  { href: "https://t.me/dianakhnizova", text: "Telegram", target: "_blank" },
  {
    href: "https://github.com/dianakhnizova",
    text: "GitHub",
    target: "_blank",
  },
];

linksData.forEach(({ href, text, target }) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  link.classList.add("footer-link");

  if (target) {
    link.target = target;
  }
 
  footerContacts.appendChild(link);

  if (text !== "GitHub") {
    footerContacts.appendChild(document.createTextNode(" | "));
  }
});

export { select, taskContainer, buttonSave, textarea };
