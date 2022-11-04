const crossbar = document.getElementById("crossbar");
const crossbarLogin = document.getElementById("crossbarLogin");
const joinNow = document.getElementById("joinNow");
const loginBtn = document.getElementById("loginBtn");

const loginModal = document.getElementById("loginModal");
const joinModal = document.getElementById("joinModal");

crossbar.addEventListener("click", () => {
    // if (crossbar.classList.contains("displayNav")) {

    joinModal.classList.remove("displayNav");

    console.log("crossbar");

    // }
});
crossbarLogin.addEventListener("click", () => {
    // if (crossbar.classList.contains("displayNav")) {

    loginModal.classList.remove("displayNav");
    console.log("crossbar");

    // }
});

joinNow.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    joinModal.classList.add("displayNav");
    // }
    console.log("joinnow");
});
loginBtn.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    loginModal.classList.add("displayNav");
    // }
    console.log("joinnow");
});
