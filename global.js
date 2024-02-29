console.log("IT’S ALIVE!");

// remove "current" class
function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");


// consolidate nav menu code
let pages = {
	"": "Home",
	"projects/": "Projects",
    "conotact/": "Contact",
    "resume/": "Resume"
	/* add the rest of your pages here */
};
let nav = document.createElement("nav");
document.body.prepend(nav);
for (let url in pages) {
	let title = pages[url];
	// Create link and add it to nav
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }
    nav.append(a);
}

// nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
// Create link and add it to nav
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// if (!ARE_WE_HOME && !url.startsWith("http")) {
// 	url = "../" + url;
// }

// a.target = "_blank

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme", position: absolute, top=1rem, right=1rem>
		Theme:
		<select>
            <option value="light dark">Automatic</option>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
		</select>
	</label>`
);

let select = document.querySelector("select");
select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
    localStorage.colorScheme = event.target.value
    document.documentElement.style.setProperty("color-scheme", event.target.value)
    if (localStorage.colorScheme) {
        select.value = localStorage.colorScheme;
    }
});
