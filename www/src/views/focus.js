// ===== FOCUS VIEW START =====

const FocusView = {

    formatTime(seconds) {

        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return (
            String(minutes).padStart(2, "0") +
            ":" +
            String(secs).padStart(2, "0")
        );

    },

    updateDisplay() {

        const timer = document.getElementById("timerDisplay");

        if (timer) {

            timer.textContent = this.formatTime(
                AppState.focusSession.remaining
            );

        }

    },

    startTimer() {

        if (AppState.focusSession.running) return;

        AppState.focusSession.running = true;

        AppState.focusSession.interval = setInterval(() => {

            if (AppState.focusSession.remaining > 0) {

                AppState.focusSession.remaining--;

                FocusView.updateDisplay();

            } else {

                clearInterval(AppState.focusSession.interval);

                AppState.focusSession.running = false;

                alert("🎉 Focus Session Complete!");

            }

        }, 1000);

    },

    pauseTimer() {

        clearInterval(AppState.focusSession.interval);

        AppState.focusSession.running = false;

    },

    resetTimer() {

        clearInterval(AppState.focusSession.interval);

        AppState.focusSession.running = false;

        AppState.focusSession.remaining =
            AppState.focusSession.duration;

        this.updateDisplay();

    },

    render() {

        return `

        <div class="container">

            <div class="card">

                <h1>🎯 Focus Timer</h1>

                <h2 id="timerDisplay">

                    ${this.formatTime(AppState.focusSession.remaining)}

                </h2>

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

                this.startTimer();

            });

        }

        if (pauseBtn) {

            pauseBtn.addEventListener("click", () => {

                this.pauseTimer();

            });

        }

        if (resetBtn) {

            resetBtn.addEventListener("click", () => {

                this.resetTimer();

            });

        }

    }

};

// ===== FOCUS VIEW END =====