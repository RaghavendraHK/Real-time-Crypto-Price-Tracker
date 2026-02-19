const btc = document.getElementById("btcPrice");
const eth = document.getElementById("ethPrice");
const doge = document.getElementById("dogePrice");

async function fetchPrices() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=inr"
        );
        const data = await response.json();

        btc.innerText = "₹ " + data.bitcoin.inr;
        eth.innerText = "₹ " + data.ethereum.inr;
        doge.innerText = "₹ " + data.dogecoin.inr;
    } catch (error) {
        btc.innerText = "Error";
        eth.innerText = "Error";
        doge.innerText = "Error";
    }
}

// Load prices on page load
fetchPrices();

// Auto refresh every 30 seconds
setInterval(fetchPrices, 30000);
