const StudyView = {

    render() {

        return `

        <div class="container">

            <div class="card">
                <h1>📚 Study Dashboard</h1>
                <p>Plan and track your study sessions.</p>
            </div>

            <div class="card">
                <h3>Today's Goal</h3>
                <h2>0 / 180 Minutes</h2>
            </div>

            <div class="card">
                <h3>Completed Sessions</h3>
                <h2>0</h2>
            </div>

            <!-- ===== SUBJECT LIST START ===== -->

            <div class="card">

                <h3>Subjects</h3>

                <div id="subjectList">

                    <div class="subject-item">

                        <span>📘 Mathematics</span>

                        <button class="delete-subject">
                            ✖
                        </button>

                    </div>

                    <div class="subject-item">

                        <span>📗 Physics</span>

                        <button class="delete-subject">
                            ✖
                        </button>

                    </div>

                </div>

                <button
                    class="button"
                    id="addSubjectBtn">

                    ➕ Add Subject

                </button>

            </div>

            <!-- ===== SUBJECT LIST END ===== -->

            <button class="button">
                ▶ Start Study Session
            </button>

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

    }

};