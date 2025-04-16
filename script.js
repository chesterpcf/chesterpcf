const descriptions = [
    "Passionate Programmer & Student",
    "Aspiring Web Developer",
    "Video Editor",
    "A Cutie, so why not date me?",
    "Want to know my hobbies?",
    "I like to play games",
    "Watch Animes",
    "and loves listening to music..."
];

let textElement = document.querySelector(".typing-text");
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = descriptions[index];

    if (!isDeleting) {
        // Type the text
        textElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause before deleting
            return;
        }
    } else {
        // Delete the text
        textElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % descriptions.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);