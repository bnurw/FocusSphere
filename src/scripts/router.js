const Router = {

    navigate(page) {

        AppState.currentPage = page;

        switch (page) {

            case "home":
                Render.mount(HomeView.render());
                break;

          case "study":

    Render.mount(StudyView.render());

    StudyView.bindEvents();

    break;
              
                

            case "focus":
                Render.mount(FocusView.render());
                FocusView.bindEvents();
                break;

            case "report":
                Render.mount(ReportView.render());
                break;

            case "settings":
                Render.mount(SettingsView.render());
                break;

            default:
                Render.mount(HomeView.render());

        }

        this.bindNavigation();

    },

    bindNavigation() {

        const buttons = document.querySelectorAll(".nav-item");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const page = button.dataset.page;

                if (page) {

                    Router.navigate(page);

                }

            });

        });

    }

};