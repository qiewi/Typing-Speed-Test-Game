const typingText = document.querySelector('.typing-text');

function randomParagraph() {
    // Random paragraph
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    console.log(paragraphs[randIndex]);
}

randomParagraph();