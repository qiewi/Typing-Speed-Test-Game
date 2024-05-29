const typingText = document.querySelector('.typing-text p'),
inpField = document.querySelector('.wrapper .input-field');

let charIndex = 0;

function randomParagraph() {
    // Random paragraph
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
    
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    console.log(typedChar)
}

randomParagraph();
inpField.addEventListener("input", initTyping);