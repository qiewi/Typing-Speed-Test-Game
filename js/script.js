const typingText = document.querySelector('.typing-text p'),
inpField = document.querySelector('.wrapper .input-field'),
mistakeTag = document.querySelector(".mistake span");

let charIndex = mistakes= 0;

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

    if (typedChar == null) {
        charIndex--;
        characters[charIndex].classList.remove("correct", "incorrect");
    } else {
        if(characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    mistakeTag.innerText = mistakes;
}

randomParagraph();
inpField.addEventListener("input", initTyping);