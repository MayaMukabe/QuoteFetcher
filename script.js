document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-box');
    const quoteButton = document.getElementById('quote-btn');

    function generateQuote() {
        quoteContainer.innerHTML = '<p>Loading New Quote...</p>';
        
        // Get API key from environment or use placeholder
        const apiKey = process.env.API_KEY || window.API_KEY;
        
        fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {"X-Api-Key": apiKey}
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const quote = data[0].quote;
            const author = data[0].author || 'Unknown';
            
            quoteContainer.innerHTML = `
                <div class="quote">${quote}</div>
                <div class="author">- ${author}</div>
            `;
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
            quoteContainer.innerHTML = '<p>Error fetching quote. Please try again.</p>';
        });
    }

    quoteButton.addEventListener('click', generateQuote);
    
    // Optional: Fetch a quote on initial load
    // generateQuote();
});



// const quoteBtn = document.getElementById("quote-btn");
// const quoteBox = document.getElementById("quote-box");

// quoteBtn.addEventListener("click", async function () {
//     try {
//         const response = await fetch("https://api-ninjas.com/api/quotes");
//         const data = await response.json();
//         quoteBox.textContent = data.content;
//      quoteBox.innerHTML = `<p>${data.content}</p>`;
//     } catch (error) {
//         quoteBox.innerHTML = `<p>The world is quiet. No quote returned.</p>`;
//     }
// });



// const quote_container = document.querySelector(".quote-container"),
// generate = document.getElementById("quote-btn");


// function generateQuote(){
//     let div = document.createElement("div");
//     quote_container.innerHTML = "Loading New Quote...";
//     fetch("https://api-ninjas.com/api/quotes", {
//         headers: {"X-Api-Key":}
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         quote_container.innerHTML = data[0].quote_container;
//     })
// }
// generateQuote();
