const quoteBtn = document.getElementById("quote-btn");
const quoteBox = document.getElementById("quote-box");

quoteBtn.addEventListener("click", async function () {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quoteBox.textContent = data.content;
     quoteBox.innerHTML = `<p>${data.content}</p>`;
    } catch (error) {
        quoteBox.innerHTML = `<p>The world is quiet. No quote returned.</p>`;
    }
});