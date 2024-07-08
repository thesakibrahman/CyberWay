// Add JavaScript functionality for the CTF Game

document.addEventListener('DOMContentLoaded', function () {
    const challengesContainer = document.getElementById('challenges-container');

    // Define your challenges with puzzles here
    const challenges = [
        {title: 'Challenge', puzzle: '"I am a simple way to hide text away. With a twist, I make secrets sway, Shift letters by just a set amount,And reveal the code without a doubt What am I?"', answer: 'caeser cipher', flag: 'CTF{Your_Third_Flag}' },
      //  { title: 'Crypto Challenge', puzzle: 'Decode the following: VGV4dCBpcyBhIG5lZWQgdG8gZGF0YSB0aGF0IG5lZWRzIHRvIGJlIGRlYWQ=', answer: 'Text is a needed to data that needs to be decoded', flag: 'crypto_flag{example_flag}' },
        // Add more challenges as needed
    ];

    // Display challenges
    challenges.forEach(challenge => {
        const challengeElement = createChallengeElement(challenge);
        challengesContainer.appendChild(challengeElement);
    });
});

function createChallengeElement(challenge) {
    const challengeElement = document.createElement('div');
    challengeElement.classList.add('challenge');

    const titleElement = document.createElement('h2');
    titleElement.textContent = challenge.title;

    const puzzleElement = document.createElement('p');
    puzzleElement.textContent = `Puzzle: ${challenge.puzzle}`;

    const answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('placeholder', 'Your answer');

    const flagElement = document.createElement('div');
    flagElement.classList.add('flag');
    flagElement.textContent = `Flag: ${challenge.flag}`;

    challengeElement.appendChild(titleElement);
    challengeElement.appendChild(puzzleElement);
    challengeElement.appendChild(answerInput);
    challengeElement.appendChild(flagElement);

    challengeElement.addEventListener('click', function () {
        // Check the answer when clicking on the challenge
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === challenge.answer.toLowerCase()) {
            // Show the flag if the answer is correct
            flagElement.style.display = 'block';
        }
    });

    return challengeElement;
}
