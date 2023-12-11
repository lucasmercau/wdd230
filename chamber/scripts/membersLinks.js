const baseURL = "https://lucasmercau.github.io/wdd230/chamber/";
const linksURL = "https://lucasmercau.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector("article");

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();
                   
function displayMembers(members) {
    members.forEach(memberIndex => {
        const memberSection = document.createElement("section");
        memberSection.setAttribute("class", "directory-section");
        const img = document.createElement("img");
        const title = document.createElement("h4");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const level = document.createElement("h4");

        img.setAttribute("src", memberIndex.icon);
        img.setAttribute("alt", `icon of ${memberIndex.name}`);
        img.setAttribute("class", "directory-img");
        
        title.textContent = memberIndex.name;
        title.setAttribute("class", "title");
        address.textContent = memberIndex.address;
        phone.textContent = memberIndex.phone;

        website.textContent = memberIndex.url;
        website.setAttribute("href", memberIndex.url);

        level.textContent = `Level: ${memberIndex.memblevel}`;

        memberSection.appendChild(img);
        memberSection.appendChild(title);
        memberSection.appendChild(address);
        memberSection.appendChild(phone);
        memberSection.appendChild(website);
        memberSection.appendChild(level);

        article.appendChild(memberSection);
    });
}