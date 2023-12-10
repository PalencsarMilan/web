const colors = ['#ff00cc', '#853b31', '#ff8c00', '#54bf7d', '#601387', '#eaff00', '#00fbff', '#000000',
                    '#ff00cc', '#853b31', '#ff8c00', '#54bf7d', '#601387', '#eaff00', '#00fbff', '#000000'];

    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let isFlipping = false;
    let startTime;

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function createCard(color, index) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.color = color;
        card.addEventListener('click', flipCard);
        document.getElementById('game-container').appendChild(card);
    }

    function createCards() {
        const shuffledColors = shuffle(colors);
        for (let i = 0; i < shuffledColors.length; i++) {
            createCard(shuffledColors[i], i);
        }
    }

    function flipCard() {
        if (isFlipping) return;

        const card = this;
        card.style.backgroundColor = card.dataset.color;
        card.classList.add('hidden');

        flippedCards.push(card);

        if (flippedCards.length === 2) {
            isFlipping = true;
            setTimeout(checkMatch, 1000);
        }
    }

    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.color === secondCard.dataset.color) {
            matchedPairs++;

            if (matchedPairs === colors.length / 2) {
                showPopup();
            }
        } else {
            // Delay before hiding the cards
            setTimeout(() => {
                firstCard.style.backgroundColor = '#3498db';
                secondCard.style.backgroundColor = '#3498db';
                firstCard.classList.remove('hidden');
                secondCard.classList.remove('hidden');
            }, 500);
        }

        flippedCards = [];
        isFlipping = false;
    }

    function showPopup() {
        const endTime = new Date();
        const timeDiff = endTime - startTime;
        const seconds = Math.floor(timeDiff / 1000);

        document.getElementById('time-taken').textContent = `Time taken: ${seconds} seconds`;

        document.getElementById('popup').style.display = 'flex';
    }

    function restartGame() {
        document.getElementById('game-container').innerHTML = '';
        document.getElementById('popup').style.display = 'none';

        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        isFlipping = false;
        startTime = null;

        createCards();
        startTime = new Date();
    }

    createCards();
    startTime = new Date();