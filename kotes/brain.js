const db = new Map(); // database.
let randomId = -1;

function initComponent() {
    const addNoteButton = document.querySelector(".btn-add-note");
    addNoteButton.addEventListener("click", addNote);
}

function displayNote() {
    clearNote();
    const noteDisplay = document.querySelector(".note-grid");
    db.forEach((v) => {
        noteDisplay.appendChild(v);
    });
}

function clearNote() {
    const noteDisplay = document.querySelector(".note-grid");
    while (noteDisplay.lastChild !== null) {
        if (noteDisplay.lastChild.className === "btn-add-note") {
            break;
        }
        noteDisplay.lastChild.remove();
    }
}

function addNote(evt) {
    const newNote = createNote();
    db.set(randomId.toString(), newNote);    
    displayNote();
}

function deleteNote(evt) {
    const deleteId = evt.target.id;
    if (db.has(deleteId)) {
        db.delete(deleteId);
    }
    displayNote();
}

function createNote() {
    const noteContainer = document.createElement("div");
    const topContainer = document.createElement("div");
    const bottomContainer = document.createElement("div");
    const noteTime = document.createElement("h5");
    const noteDelete = document.createElement("p");
    const noteContent = document.createElement("textarea");
    
    randomId = Math.floor(Math.random() * 100000 + 1);

    noteContainer.classList.add("note");
    topContainer.classList.add("top");
    bottomContainer.classList.add("bottom");
    noteTime.classList.add("note-time");
    noteDelete.classList.add("delete-note");
    noteContent.classList.add("note-content");

    noteDelete.setAttribute("id", randomId);
    noteTime.textContent = getDate();
    noteDelete.textContent = "x";
    noteDelete.addEventListener("click", deleteNote);

    topContainer.appendChild(noteTime);
    topContainer.appendChild(noteDelete);
    bottomContainer.appendChild(noteContent);
    noteContainer.appendChild(topContainer);
    noteContainer.appendChild(bottomContainer);

    return noteContainer;
}

function getDate() {
    const date = new Date();
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

initComponent();