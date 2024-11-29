import "./style.css";

// ========== Intro Visibility ==========
const introSection = document.querySelector("#intro");
introSection.classList.add("visible");

// ========== Section Fade In and Fade Out Functionality ==========
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight * 0.75 && sectionPosition > -windowHeight * 0.25) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});

// ========== Heart Cursor Trail Functionality ==========
let lastHeartTime = 0;
document.addEventListener("mousemove", (e) => {
    const now = Date.now();

    if (now - lastHeartTime > 100) {
        lastHeartTime = now;

        let body = document.querySelector("body");
        let heart = document.createElement("span");

        let x = e.pageX;
        let y = e.pageY;
        heart.style.left = x + "px";
        heart.style.top = y + "px";

        let transformValue = Math.random() * 360;
        heart.style.transform = "rotate(" + transformValue + "deg)";

        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
