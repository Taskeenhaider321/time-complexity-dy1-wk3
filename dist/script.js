const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck();


function submitBtn() {
    var value = sessionStorage.getItem("value");
    let mainPage = document.getElementById("main-page");
    mainPage.classList.add("hidden");
    let resultPage = document.getElementById("result-page");
    resultPage.classList.remove("hidden");
    let ratingNumber = document.getElementById("rating-number");
    ratingNumber.innerHTML = "&nbsp;" + value + "&nbsp;";
}

function getRating(value) {
    sessionStorage.setItem("value", JSON.stringify(value));
}


gsap.from(".animation-bg",{
    // scale: -1,
       y: -600,
       delay: 1,
       duration: 2,
})

// * Typing Animation
function typeWriter(text, elementId, speed) {
    let i = 0;
    let isBackspacing = false;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function type() {
        const visibleText = text.substring(0, i);
        const cursor = i === text.length && !isBackspacing ? "|" : "";

        element.innerHTML = visibleText + cursor;

        if (!isBackspacing) {
            i++;
            if (i > text.length) {
                isBackspacing = true;
                setTimeout(type, 500);
            } else {
                setTimeout(type, speed);
            }
        } else {
            i--;
            if (i >= 0) {
                setTimeout(type, speed);
            } else {
                isBackspacing = false;
                setTimeout(type, 500);
            }
        }
    }

    type();
}

function startTypingEffect() {
    const h1Text = "How did we do?";
    typeWriter(h1Text, "typed-h1", 40);
}

startTypingEffect();