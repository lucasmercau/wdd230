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
    members = shuffleArray(members);
    let num = 0;
    members.forEach(memberIndex => {
        if (memberIndex.memblevel == "Gold" || memberIndex.memblevel == "Silver")
        {
            if (num < 3)
            {
                num++;
                const memberSection = document.createElement("section");
                memberSection.setAttribute("class", "directory-section index");
                const img = document.createElement("img");
                const title = document.createElement("h4");
                const address = document.createElement("p");
                const phone = document.createElement("p");
                const website = document.createElement("a");
                const level = document.createElement("h4");
                const message = document.createElement("p");
                message.textContent = `"${memberIndex.message}"`;
                const br = document.createElement("br");

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
                memberSection.appendChild(br);
                memberSection.appendChild(message);
                memberSection.appendChild(br);
                memberSection.appendChild(address);
                memberSection.appendChild(phone);
                memberSection.appendChild(website);
                memberSection.appendChild(level);

                article.appendChild(memberSection);
            }
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}