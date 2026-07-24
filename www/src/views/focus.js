const FocusView = {

    render() {

        return `
        <div class="container">

            <div class="card">
                <h1>🎯 Focus Timer</h1>
                <h2 id="timerDisplay">25:00</h2>
            </div>

            <button class="button" id="startBtn">
                ▶ Start
            </button>

            <button class="button" id="pauseBtn">
                ⏸ Pause
            </button>

            <button class="button" id="resetBtn">
                🔄 Reset
            </button>

        </div>

        <nav class="bottom-nav">

            <button class="nav-item" data-page="home">
                🏠<br>Home
            </button>

            <button class="nav-item" data-page="study">
                📚<br>Study
            </button>

            <button class="nav-item active" data-page="focus">
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

        const startBtn = document.getElementById("startBtn");
        const pauseBtn = document.getElementById("pauseBtn");
        const resetBtn = document.getElementById("resetBtn");

        if (startBtn) {
            startBtn.addEventListener("click", () => {
                console.log("Start");
            });
        }

        if (pauseBtn) {
            pauseBtn.addEventListener("click", () => {
                console.log("Pause");
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                console.log("Reset");
            });
        }

    }

};