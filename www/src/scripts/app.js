const App = {

    init() {

        console.log("FocusSphere Started");

        AppState.initialized = true;

        Router.navigate("home");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});