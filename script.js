
const Aukat = document.querySelector("#Aukat");
const stockPrice = document.querySelector("#stockPrice");
const quantity = document.querySelector("#quantity");
const sellPrice = document.querySelector("#sellPrice");
const InvestedAmmount = document.querySelectorAll(".result span")[0];
const CurrentValue = document.querySelectorAll(".result span")[1];
const NetProfit = document.querySelectorAll(".result span")[2];
const ProfitLoass = document.querySelectorAll(".result span")[3];



Aukat.addEventListener("input", () => {
    quantity.value = (Aukat.value / stockPrice.value);
    console.log(quantity.value);
    calculation();
});

stockPrice.addEventListener("input", () => {
    quantity.value = (Aukat.value / stockPrice.value);
    calculation();
});

quantity.addEventListener("input", () => {
    calculation();
});

sellPrice.addEventListener("input", () => {
    calculation();
});

function calculation() {
    InvestedAmmount.textContent = quantity.value * stockPrice.value;
    CurrentValue.textContent = quantity.value * sellPrice.value;
    NetProfit.textContent = CurrentValue.innerHTML - InvestedAmmount.innerHTML;
    ProfitLoass.textContent = Math.round((NetProfit.innerHTML / InvestedAmmount.innerHTML) * 100) * 100 / 100 +
        "%"

    const lessOrgreater = Number(NetProfit.textContent);
    if (lessOrgreater < 0) {
        NetProfit.style.color = "red";
        ProfitLoass.style.color = "red";
    } else {
        NetProfit.style.color = "green";
        ProfitLoass.style.color = "green";
    }
}