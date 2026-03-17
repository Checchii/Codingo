const easyChallenge = [
    { text: "Solve 1 LeetCode Easy", difficulty: 1 },
    { text: "Solve 3 array problems", difficulty: 1 },
    { text: "Reverse a string without built-ins", difficulty: 1 },
    { text: "Write a FizzBuzz variant", difficulty: 1 },
    { text: "Center a div using FlexBox", difficulty: 1 },
    { text: "Create a button with hover animation", difficulty: 1 },
    { text: "Fetch data from a public API", difficulty: 1 },
    { text: "Console log all values in an object", difficulty: 1 },
    { text: "Fix a broken function", difficulty: 1 },
    { text: "Write a function using map/filter", difficulty: 1 }
];

const mediumChallenge = [
    { text: "Solve 2 LeetCode Mediums", difficulty: 2 },
    { text: "Build a responsive navbar", difficulty: 2 },
    { text: "Implement a modal component", difficulty: 2 },
    { text: "Create a form with validation", difficulty: 2 },
    { text: "Build a simple API (Node/Express)", difficulty: 2 },
    { text: "Use async/await with error handling", difficulty: 2 },
    { text: "Build a to-do list (CRUD)", difficulty: 2 },
    { text: "Implement a debounce function", difficulty: 2 },
    { text: "Style a page using CSS Grid", difficulty: 2 },
    { text: "Refactor messy code into clean functions", difficulty: 2 },
];

const hardChallenge = [
    { text: "Build a small full-stack app", difficulty: 3 },
    { text: "Create a REST API with multiple routes", difficulty: 3 },
    { text: "Learn basics of a new language (Go, Rust, C++)", difficulty: 3 },
    { text: "Solve 1 hard algorithm problem", difficulty: 3 },
    { text: "Build a feature with state management (React)", difficulty: 3 },
];

/// list of all challenges
const boardChallenges = [...easyChallenge, ...mediumChallenge, ...hardChallenge];

/// bingo board tiles 
const boardTiles = document.querySelectorAll('.tile');

/// update text content for each tile in board
boardTiles.forEach((tile, index) => {

    const tileText = tile.querySelector('.challenge-text');
    tileText.textContent = boardChallenges[index].text;

    // clear container for reshuffle
    const chipsContainer = tile.querySelector('.chips-container');
    chipsContainer.innerHTML = '';

    const chip = document.createElement('span');

    if (boardChallenges[index].difficulty == 1) {
        chip.classList.add('chip', 'easy');
    } else if (boardChallenges[index].difficulty == 2) {
        chip.classList.add('chip', 'medium');
    } else {
        chip.classList.add('chip', 'hard');
    }

    chipsContainer.appendChild(chip);
});
