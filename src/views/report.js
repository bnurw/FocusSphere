const ReportView = {

    render() {

        return `
        <div class="container">

            <div class="card">
                <h1>📊 Reports</h1>
                <p>Your productivity overview.</p>
            </div>

            <div class="card">
                <h3>Today's Focus</h3>
                <h2>${AppState.focusScore}%</h2>
            </div>

            <div class="card">
                <h3>Study Time</h3>
                <h2>${AppState.studyMinutes} min</h2>
            </div>

        </div>

        <nav class="bottom-nav">

            <button class="nav-item" data-page="home">
                🏠<br>Home
            </button>

            <button class="nav-item" data-page="study">
                📚<br>Study
            </button>

            <button class="nav-item" data-page="focus">
                🎯<br>Focus
            </button>

            <button class="nav-item active" data-page="report">
                📊<br>Report
            </button>

            <button class="nav-item" data-page="settings">
                ⚙️<br>Settings
            </button>

        </nav>
        `;

    }

};