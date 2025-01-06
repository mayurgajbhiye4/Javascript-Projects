const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let c = 0;

increaseBtn.onclick = function() {
    c++;
    countLabel.textContent = c;
}
decreaseBtn.onclick = function() {
    c--;
    countLabel.textContent = c;
}
resetBtn.onclick = function() {
    c = 0;
    countLabel.textContent = c;
}