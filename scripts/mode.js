const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll(".card");
const hr = document.querySelector("hr");
const link = document.querySelectorAll(".homework li a");
const heroimg = document.querySelector(".hero");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "gray";
        heroimg.style.background = "gray";
		main.style.color = "#fff";
        sections.forEach(section => {
            section.style.background = "black";
        });
        link.forEach(a => {
            a.style.color = "#8181F7";
        });
		modeButton.textContent = "🔆";
	} else {
        main.style.background = "white";
        heroimg.style.background = "white";
		main.style.color = "#000";
        hr.style.color = "black";
        sections.forEach(section => {
            section.style.background = "white";
        });
        link.forEach(a => {
            a.style.color = "blue";
        });
		modeButton.textContent = "🕶️";
	}
});
