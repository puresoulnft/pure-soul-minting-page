function selectFaction(faction) {
    if (faction === 'divine') {
        window.location.href = "mint-divine.html";
    } else if (faction === 'primordial') {
        window.location.href = "mint-primordial.html";
    } else if (faction === 'fallen') {
        window.location.href = "mint-fallen.html";
    }
}