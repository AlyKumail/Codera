const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const navCross = document.getElementById("navCross");

hamburger.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    console.log("ham");
});
navCross.addEventListener("click", () => {
    mobileNav.style.display = "none";
});
