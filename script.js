

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const gifOverlay = document.getElementById("gifOverlay");
    const yesButton = document.getElementById("yes");
    const rainContainer = document.getElementById("rainContainer");

    let moveAttempts = 0;

    function moveNo() {
        moveAttempts++;

        if (moveAttempts > 15) {
            noButton.style.top = "";
            noButton.style.left = "";
            moveAttempts = 0;
            return;
        }

        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    function createFallingMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;

        const randomX = Math.random() * window.innerWidth;
        messageElement.style.left = `${randomX}px`;
        rainContainer.appendChild(messageElement);

        setTimeout(() => {
            rainContainer.removeChild(messageElement);
        }, 7000);
    }

    noButton.addEventListener("mouseover", moveNo);

    yesButton.addEventListener("click", () => {
        gifOverlay.style.display = "flex";

        const messages = ["I love you too 💞💞💞", "You're amazing!", "You the Best !!", "Happy Valentine's Day!", "Forever and always ❤️"];
        for (let i = 0; i < 20; i++) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setTimeout(() => createFallingMessage(randomMessage), i * 300);
        }
    });

    gifOverlay.addEventListener("click", () => {
        gifOverlay.style.display = "none";
    });
});
