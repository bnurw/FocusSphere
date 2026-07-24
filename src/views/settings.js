const SettingsView = {

    render() {

        return `
        <div class="container">

            <div class="card">
                <h1>⚙️ Settings</h1>
                <p>Customize your FocusSphere experience.</p>
            </div>

            <div class="card">
                <h3>Theme</h3>
                <p>Dark Mode (Coming Soon)</p>
            </div>

            <div class="card">
                <h3>Notifications</h3>
                <p>Study Reminder (Coming Soon)</p>
            </div>

            <div class="card">
                <h3>Version</h3>
                <p>FocusSphere v1.0.0</p>
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

            <button class="nav-item" data-page="report">
                📊<br>Report
            </button>

            <button class="nav-item active" data-page="settings">
                ⚙️<br>Settings
            </button>

        </nav>
        `;

    }

};