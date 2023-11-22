const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll(".card");
const allTop = document.querySelectorAll(".top");
const fieldset = document.querySelector("fieldset");
const legend = document.querySelector("legend");
const link = document.querySelectorAll(".homework li a");
const input = document.querySelectorAll("input");
const submitB = document.querySelector("form input.submitBtn");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "gray";
		main.style.color = "#fff";
        rangevalue.style.color = "white";
        rangevalue.style.background = "#808080";
        // legend.style.color = "white";
        fieldset.style.border = "1px solid white";
        sections.forEach(section => {
            section.style.background = "black";
        });
        allTop.forEach(t => {
            t.style.color = "white";
        })
        input.forEach(i => {
            i.style.color = "white";
        })
        link.forEach(a => {
            a.style.color = "#8181F7";
        });
        submitB.style.color = "white";
		modeButton.textContent = "🔆";
	} else {
        main.style.background = "white";
		main.style.color = "#000";
        rangevalue.style.color = "navy";
        rangevalue.style.background = "white";
        // legend.style.color = "#445ba9";
        fieldset.style.border = "1px solid #445ba9";
        sections.forEach(section => {
            section.style.background = "white";
        });
        allTop.forEach(t => {
            t.style.color = "#216613";
        })
        input.forEach(i => {
            i.style.color = "#555";
        })
        link.forEach(a => {
            a.style.color = "blue";
        });
        submitB.style.color = "white";
		modeButton.textContent = "🕶️";
	}
});
