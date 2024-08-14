document.addEventListener("DOMContentLoaded", function () {
    const comboBoxes = document.querySelectorAll(".combo-box");

    comboBoxes.forEach(comboBox => {
        const selected = comboBox.querySelector(".combo-box-selected");
        const dropdown = comboBox.querySelector(".combo-box-dropdown");
        const items = dropdown.querySelectorAll(".combo-box-item");

        selected.addEventListener("click", function () {
            comboBoxes.forEach(box => {
                if (box !== comboBox) {
                    box.querySelector(".combo-box-dropdown").style.display = "none";
                }
            });
                        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });

        items.forEach(item => {
            item.addEventListener("click", function () {
                selected.textContent = this.textContent;
                dropdown.style.display = "none";
            });
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest('.combo-box')) {
            comboBoxes.forEach(comboBox => {
                comboBox.querySelector(".combo-box-dropdown").style.display = "none";
            });
        }
    });
});
