document.addEventListener("DOMContentLoaded", function () {
    const tabWidgets = document.querySelectorAll(".tab-widget");

    tabWidgets.forEach(widget => {
        const tabs = widget.querySelectorAll(".tab");
        const tabPanes = widget.querySelectorAll(".tab-pane");

        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                tabs.forEach(t => t.classList.remove("active"));
                tabPanes.forEach(pane => pane.classList.remove("active"));
                this.classList.add("active");
                const activePane = widget.querySelector(`#${this.dataset.tab}`);
                activePane.classList.add("active");
            });
        });
        if (tabs.length > 0) {
            tabs[0].click();
        }
    });
});
