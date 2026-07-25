// ===== STUDY VIEW START =====

const StudyView = {

    getSubjects() {

        const savedSubjects = StorageManager.load(DB.SUBJECTS);

        if (Array.isArray(savedSubjects) && savedSubjects.length > 0) {
            return savedSubjects;
        }

        return [

            "Mathematics",

            "Physics",

            "Chemistry",

            "Biology",

            "English"

        ];

    },

    saveSubjects(subjects) {

        AppState.subjects = [...subjects];

        StorageManager.save(DB.SUBJECTS, AppState.subjects);

    },

    renderSubjectItems(subjects) {

        if (!subjects.length) {
            return `
                <div class="card">
                    <p>No subjects added yet.</p>
                </div>
            `;
        }

        return subjects.map((subject, index) => `

            <div class="subject-item" data-index="${index}">

                <span>${subject}</span>

                <div class="subject-actions">

                    <button class="button" data-action="rename" data-index="${index}">
                        ✏️ Rename
                    </button>

                    <button class="button" data-action="delete" data-index="${index}">
                        ✖ Delete
                    </button>

                </div>

            </div>

        `).join("");

    },

    render() {

        const subjects = this.getSubjects();

        return `

        <div class="container">

            <div class="card">

                <h1>📚 Study Dashboard</h1>

                <p>Manage your subjects and study plan.</p>

            </div>

            <div class="card">

                <h3>Add New Subject</h3>

                <input
                    id="newSubjectName"
                    class="input"
                    type="text"
                    placeholder="Type subject name"
                >

                <button class="button" id="addSubjectBtn">
                    ➕ Add Subject
                </button>

            </div>

            <div class="card">

                <h3>Subjects</h3>

                <div id="subjectList">
                    ${this.renderSubjectItems(subjects)}
                </div>

            </div>

            <div class="card">

                <h3>Default Study Plan</h3>

                <p>Target Time: ${AppState.studySession.targetMinutes} minutes</p>

                <p>Selected Subject: ${AppState.studySession.subject || "Not selected"}</p>

            </div>

        </div>

        <nav class="bottom-nav">

            <button class="nav-item" data-page="home">
                🏠<br>Home
            </button>

            <button class="nav-item active" data-page="study">
                📚<br>Study
            </button>

            <button class="nav-item" data-page="focus">
                🎯<br>Focus
            </button>

            <button class="nav-item" data-page="report">
                📊<br>Report
            </button>

            <button class="nav-item" data-page="settings">
                ⚙️<br>Settings
            </button>

        </nav>

        `;

    },

    bindEvents() {

        const addBtn = document.getElementById("addSubjectBtn");
        const subjectInput = document.getElementById("newSubjectName");
        const subjectList = document.getElementById("subjectList");

        if (addBtn && subjectInput) {

            addBtn.addEventListener("click", () => {

                const newSubject = subjectInput.value.trim();

                if (!newSubject) {
                    alert("Please type a subject name.");
                    return;
                }

                const subjects = StudyView.getSubjects();

                subjects.push(newSubject);

                StudyView.saveSubjects(subjects);

                subjectInput.value = "";

                Router.navigate("study");

            });

        }

        if (subjectList) {

            subjectList.addEventListener("click", (event) => {

                const button = event.target.closest("button[data-action]");

                if (!button) return;

                const action = button.dataset.action;
                const index = Number(button.dataset.index);

                const subjects = StudyView.getSubjects();

                if (!Number.isInteger(index) || index < 0 || index >= subjects.length) {
                    return;
                }

                if (action === "delete") {

                    subjects.splice(index, 1);

                    StudyView.saveSubjects(subjects);

                    Router.navigate("study");

                    return;

                }

                if (action === "rename") {

                    const currentName = subjects[index];
                    const updatedName = prompt("Rename subject", currentName);

                    if (updatedName === null) return;

                    const trimmedName = updatedName.trim();

                    if (!trimmedName) {
                        alert("Subject name cannot be empty.");
                        return;
                    }

                    subjects[index] = trimmedName;

                    StudyView.saveSubjects(subjects);

                    Router.navigate("study");

                    return;

                }

            });

        }

    }

};

// ===== STUDY VIEW END =====