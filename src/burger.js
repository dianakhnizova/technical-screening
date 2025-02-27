const startBurger = () => {
    document.getElementById("burger-menu").addEventListener("click", () => {
        document.querySelector(".header").classList.toggle("open")
        document.querySelector(".overlay").classList.toggle("active")

    })
};

export {startBurger}