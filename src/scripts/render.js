const Render = {

    mount(html) {

        const app = document.getElementById("app");

        if (!app) {
            console.error("App container not found");
            return;
        }

        app.innerHTML = html;

    }

};
