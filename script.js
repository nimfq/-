const submitButton = document.getElementById('submit-name');
const nameInput = document.getElementById('name-input');
const loveMessage = document.getElementById('love-message');
const rosePetalContainer = document.getElementById('rose-petal-container');
const questionElement = document.getElementById('question');

submitButton.addEventListener('click', () => {
    if (nameInput.value.trim()!== '') {
        loveMessage.textContent = `Я люблю тебя, ${nameInput.value.trim()}!`;
        loveMessage.style.position = 'absolute';
        loveMessage.style.top = '50%';
        loveMessage.style.left = '50%';
        loveMessage.style.transform = 'translate(-50%, -50%)';
        loveMessage.style.textAlign = 'center';
        loveMessage.style.fontSize = '3em';

        // Create 30 rose petals and add them to the container
        for (let i = 0; i < 30; i++) {
            const rosePetal = document.createElement('div');
            rosePetal.classList.add('rose-petal');
            rosePetal.style.left = `${Math.random() * 100}%`;
            rosePetalContainer.appendChild(rosePetal);

            // Add animation to each rose petal
            rosePetal.style.animationDelay = `${i * 0.1}s`;
            rosePetal.style.animationDuration = `3s`;
        }

        // Prevent the page from scrolling when the rose petals are added
        document.body.style.overflow = 'hidden';

        // Hide the button and the question
        submitButton.style.display = 'none';
        questionElement.style.display = 'none';
        nameInput.style.display = 'none';
    }
});

// Restore the page scrolling when the rose petals are removed
rosePetalContainer.addEventListener('transitionend', () => {
    document.body.style.overflow = 'auto';
});