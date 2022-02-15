//DOM
const ulDOM = document.querySelector("#list");
const lists = ulDOM.querySelectorAll("li");

const toastTrigger = document.getElementById("addBtn");
const empty = document.getElementById("empty");
const deleted = document.getElementById("deleted");

// input field send addtask event
function getValue(e) {
    e.preventDefault();

    const id = localStorage.getItem("id") || 0;
    const input = document.querySelector("#task");
    const task = input.value;

    // items for logic is here
    if (isThereItem(task)) {
        addToast(available);
    } else if (task.trim()) {
        addTask(id, task);
        saveLocal(id, task);
        id++;
    } else {
        addToast(empty);
    }

    // input is cleared here
    input.value = "";
    input.focus();
    localStorage.setItem("id", id);
}

function isThereItem(item) {
    const txt = [];

    [...ulDOM.querySelectorAll("li")].map((el) => {
        txt.push(el.firstElementChild.textContent);
    });

    return txt.includes(item);
}

// task add operation with dom
function addTask(key, task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("span");

    span.innerHTML = task;
    li.id = key;

    deleteBtn.id = "delete";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "float-end");
    deleteBtn.innerHTML = "X";

    li.append(span, deleteBtn);
    ulDOM.append(li);
}

// task delete operation
function deleteTask(e) {
    const target = e.target;
    const el = target.parentElement;

    if (target.id == "delete") {
        el.remove();
        addToast(deleted);
    }

    localStorage.removeItem(el.id);
}

function doneTask(e) {
    const target = e.target;

    if (target.tagName == "SPAN") {
        target.parentElement.classList.toggle("checked");
    } else if (target.tagName == "LI") {
        target.classList.toggle("checked");
    }

}

// toast notifications
function addToast(type) {
    const toast = new bootstrap.Toast(type);
    toast.show();

    return toast;
}

function saveLocal(key, item) {
    localStorage.setItem(key, item);
}

function getDataFromStorage() {
    const keys = Object.keys(localStorage);
    keys.sort((a, b) => a - b);

    for (const i in keys) {
        if (keys[i] !== "id") {
            addTask(keys[i], localStorage.getItem(keys[i]));
        }
    }
}

window.addEventListener("load", getDataFromStorage);

ulDOM.addEventListener("click", deleteTask);
ulDOM.addEventListener("click", doneTask)