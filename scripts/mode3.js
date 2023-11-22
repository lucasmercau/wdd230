const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll(".card");
const allTop = document.querySelectorAll(".top");
const fieldset = document.querySelector("fieldset");
const legend = document.querySelector("legend");
const link = document.querySelectorAll(".homework li a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "gray";
		main.style.color = "#fff";
        sections.forEach(section => {
            section.style.background = "black";
        });
        allTop.forEach(t => {
            t.style.color = "white";
        })
        link.forEach(a => {
            a.style.color = "#8181F7";
        });
		modeButton.textContent = "🔆";
	} else {
        main.style.background = "white";
		main.style.color = "#000";
        sections.forEach(section => {
            section.style.background = "white";
        });
        allTop.forEach(t => {
            t.style.color = "#216613";
        })
        link.forEach(a => {
            a.style.color = "blue";
        });
		modeButton.textContent = "🕶️";
	}
});
