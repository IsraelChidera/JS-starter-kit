
export const toggle = function() {
    const button = document.querySelector("button");
    const content = document.querySelector(".content");

    button.addEventListener("click", function() {
        content.classList.toggle("hidden");
    })
}
