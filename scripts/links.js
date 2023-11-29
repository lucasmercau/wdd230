const baseURL = "https://lucasmercau.github.io/wdd230/";
const linksURL = "https://lucasmercau.github.io/wdd230/data/links.json";
const ul = document.querySelector(".homework");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();
                   
function displayLinks(weeks) {
    weeks.forEach(weekindex => {
        const li = document.createElement("li");
        li.innerHTML = `${weekindex.week}:`
        weekindex.links.forEach(link => {
            li.innerHTML += ` <a href="${link.url}">${link.title}</a> |`
        })
        li.innerHTML = li.innerHTML.slice(0, -1);
        ul.appendChild(li);
    });
}