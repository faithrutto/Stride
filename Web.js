console.log("Hello World");
const counter = document.getElementById("counter");
const INbtn = document.getElementById("incbtn");
const resetbtn = document.getElementById("resetbtn");
const decbtn = document.getElementById("decbtn");
let count = 0;
INbtn.onclick = function () {
    count++;
    counter.textContent = count;
}
resetbtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}
decbtn.onclick = function () {
    count--;
    counter.textContent = count;
}
let username;
document.getElementById("enter").onclick = function () {
    username = document.getElementById("text").value;
    console.log(username);
    document.getElementById("hey").textContent = ("Hello " + username);

}