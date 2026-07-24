const HomeView = {

    render() {

        return `
        <div class="container">

            <div class="card">
                <h1>Good Morning 👋</h1>
                <p>Welcome to FocusSphere</p>
            </div>

            <div class="card">
                <h3>Today's Focus Score</h3>
                <h2>${AppState.focusScore}/100</h2>
            </div>

            <div class="card">
                <h3>Today's Study</h3>
                <p>${AppState.studyMinutes} Minutes</p>
            </div>

            <button class="button" id="startFocus">
                Start Focus Session
            </button>

        </div>

<nav class="bottom-nav">

<button class="nav-item active" data-page="home">
🏠<br>Home
</button>

<button class="nav-item" data-page="study">
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