let OpenTriggerEl = document.querySelector(".trigger");
let closeModalEl = document.querySelector(".close");
let ModalEl = document.querySelector(".modal");

function main() {
    OpenTriggerEl.addEventListener("click", function () {
        ModalEl.classList.add("open");
    });
    closeModalEl.addEventListener("click", function () {
        ModalEl.classList.remove("open");
    });
    window.addEventListener("click", function (event) {
        if (event.target === ModalEl) {
            ModalEl.classList.remove("open");
        }
    });
}
main();
