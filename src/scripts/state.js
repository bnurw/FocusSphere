const AppState = {

    initialized: false,

    currentPage: "home",

    focusScore: 82,

    studyMinutes: 0,

    currentStreak: 0,

    timerSeconds: 1500,

    timerRunning: false,

    timerInterval: null,

    // ===== STUDY STATE START =====
    studySession: {

        subject: "",

        targetMinutes: 25,

        completedMinutes: 0,

        isRunning: false

    },

    subjects: [

        "Mathematics",

        "Physics",

        "Chemistry",

        "Biology",

        "English"

    ],
    // ===== STUDY STATE END =====
// ===== FOCUS STATE START =====

focusSession: {

    duration: 1500,

    remaining: 1500,

    running: false,

    interval: null,

    subject: ""

},

// ===== FOCUS STATE END =====
};