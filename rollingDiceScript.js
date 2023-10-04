const diceList = ["⚀", "⚁","⚂","⚃", "⚄", "⚅"];
let rollButton = document.getElementById("RollButton")
let Dice1 = document.getElementById("Dice1");
let Dice2 = document.getElementById("Dice2");
let Display1 = document.getElementById("Display1");
let Display2 = document.getElementById("Display2");
let Display1Sum = document.getElementById("DisplaySum");
console.log(Dice1)
function rollDice() {
    let dice1Roll = Math.floor(Math.random() * 6);
    let dice2Roll = Math.floor(Math.random() * 6);
    Dice1.textContent = diceList[dice1Roll];
    Dice2.textContent = diceList[dice2Roll];
    Display1.textContent = dice1Roll + 1;
    Display2.textContent = dice2Roll + 1;
    Display1Sum.textContent = dice1Roll + dice2Roll + 2;
}
rollButton.addEventListener("click", rollDice);