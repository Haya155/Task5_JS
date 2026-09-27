let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")) || [];

for(let i = 0; i < arr.length; i++) {
    listTask.innerHTML += "<p>" + arr[i] + "<button onclick='deleteTask(this)'>Delete</button>" + "</p>";
}

function addTask() {
    let task = inputText.value.trim();
    if(task === "") return;

    arr.push(task);
    localStorage.setItem("task", JSON.stringify(arr));

    listTask.innerHTML += "<p>" + task + "<button onclick='deleteTask(this)'>Delete</button>" + "</p>";
    inputText.value = "";
}

addButton.onclick = addTask;

inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function deleteTask(text) {
    let task = text.parentElement.firstChild.textContent;
    let index = arr.indexOf(task);

    if(index !== -1) {
        arr.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(arr));
    }

    text.parentElement.remove();
}