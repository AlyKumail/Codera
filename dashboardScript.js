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

const acheivementModal = document.getElementById("acheivementModal");
const viewBtn = document.getElementById("view-all");
const acheivementCross = document.getElementById("acheivementCross");

viewBtn.addEventListener("click", () => {
    acheivementModal.style.display = "block";
});

acheivementCross.addEventListener("click", () => {
    acheivementModal.style.display = "none";
});

{
    /* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>; */
}
