const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterLsit() || [];

button.addEventListener("click", () => { 
    if (input.value != "") // make sure the input is not empty
    {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList() // update the localStorage with the new array
        input.value = ""; // clear the input
        input.focus(); // set the focus back to the input
    }
    else 
    {
        input.focus();
    }
});


input.focus();
input.value = "";

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; // here a change
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();           
    });
}

function setChapterList() {
    localStorage.setItem("MyFavBoMList", JSON.stringify(chaptersArray));
}

function getChapterLsit() {
    return JSON.parse(localStorage.getItem("MyFavBoMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item =>  item !== chapter);
    setChapterList();
}