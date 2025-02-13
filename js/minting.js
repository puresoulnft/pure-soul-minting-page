document.addEventListener("DOMContentLoaded", function () {
    const connectWalletBtn = document.getElementById("connectWallet");
    const mintNFTBtn = document.getElementById("mintNFT");

    connectWalletBtn.addEventListener("click", async function () {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                connectWalletBtn.textContent = "Wallet Connected";
                console.log("Wallet connected!");
            } catch (error) {
                console.error("User denied wallet connection", error);
            }
        } else {
            alert("MetaMask is not installed. Please install it to connect.");
        }
    });