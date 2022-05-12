const gridItems = document.querySelectorAll(".card-main > .card");
// const gridWrapper = document.querySelector(".card-main");
// let visibleElements = [];
// let hiddenElements = [];

options = {
    threshold: 1,
};

const observer = new IntersectionObserver(cb, options);

function cb(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const loader = document.querySelector(".loader");
            loader.classList.add("hide");
        } else {
            runLoader();
            loadContent(entry);
        }
    });
}

function runLoader() {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hide");
}

function loadContent(entry) {
    entry.target.classList.remove("hide");
    observer.unobserve(entry.target);
    console.log(entry);
}

gridItems.forEach((item) => {
    observer.observe(item);
});
