const easyChallenge = [
    { text: "Solve 1 LeetCode Easy", difficulty: 1, icon : 'images/leetcode.png' },
    { text: "Solve 3 array problems", difficulty: 1, icon : 'images/leetcode.png' },
    { text: "Reverse a string without built-ins", difficulty: 1, icon : 'images/vscode.png' },
    { text: "Write a FizzBuzz variant", difficulty: 1, icon : 'images/vscode.png' },
    { text: "Center a div using FlexBox", difficulty: 1, icon : 'images/css.png' },
    { text: "Create a button with hover animation", difficulty: 1, icon : 'images/css.png' },
    { text: "Fetch data from a public API", difficulty: 1, icon : 'images/backend.png' },
    { text: "Console log all values in an object", difficulty: 1, icon : 'images/vscode.png' },
    { text: "Fix a broken function", difficulty: 1, icon : 'images/vscode.png' },
    { text: "Write a function using map/filter", difficulty: 1, icon : 'images/vscode.png' }
];

const mediumChallenge = [
    { text: "Solve 2 LeetCode Mediums", difficulty: 2, icon : 'images/leetcode.png' },
    { text: "Build a responsive navbar", difficulty: 2, icon : 'images/css.png' },
    { text: "Implement a modal component", difficulty: 2, icon : 'images/css.png' },
    { text: "Create a form with validation", difficulty: 2, icon : 'images/vscode.png' },
    { text: "Build a simple API (Node/Express)", difficulty: 2, icon : 'images/backend.png' },
    { text: "Use async/await with error handling", difficulty: 2, icon : 'images/vscode.png' },
    { text: "Build a to-do list (CRUD)", difficulty: 2, icon : 'images/backend.png' },
    { text: "Implement a debounce function", difficulty: 2, icon : 'images/vscode.png' },
    { text: "Style a page using CSS Grid", difficulty: 2, icon : 'images/css.png' },
    { text: "Refactor messy code into clean functions", difficulty: 2, icon : 'images/vscode.png' },
];

const hardChallenge = [
    { text: "Build a small full-stack app", difficulty: 3, icon : 'images/project.png' },
    { text: "Create a REST API with multiple routes", difficulty: 3, icon : 'images/backend.png' },
    { text: "Learn basics of a new language (Go, Rust, C++)", difficulty: 3, icon : 'images/vscode.png' },
    { text: "Solve 1 hard algorithm problem", difficulty: 3, icon : 'images/leetcode.png' },
    { text: "Build a feature with state management (React)", difficulty: 3, icon : 'images/vscode.png' },
];

/// list of all challenges
const boardChallenges = [...easyChallenge, ...mediumChallenge, ...hardChallenge];

/// bingo board tiles 
const boardTiles = document.querySelectorAll('.tile');

// Track current active tile
let activeTile = null;

/// main loop to update content for each tile in board
boardTiles.forEach((tile, index) => {

    /// Populate text
    const tileText = tile.querySelector('.challenge-text');
    tileText.textContent = boardChallenges[index].text;

    // Set up chip 
    const chipsContainer = tile.querySelector('.chips-container');
    chipsContainer.innerHTML = '';

    const chip = document.createElement('img');

    if (boardChallenges[index].difficulty == 1) {
        chip.src = 'images/easy-chip.png';
    } else if (boardChallenges[index].difficulty == 2) {
        chip.src = 'images/medium-chip.png';
    } else {
        chip.src = 'images/hard-chip.png';
    }
    chip.classList.add('chip-image');

    chipsContainer.appendChild(chip);

    /// Set tile icon
    const imageIcon = tile.querySelector('.challenge-icon');
    imageIcon.src = boardChallenges[index].icon;


    // Click Event
    tile.addEventListener('click', () => {
        if (activeTile && activeTile !== tile){
            // close previously active tiled
            activeTile.classList.remove('active');
        }
        // toggle the clicked tile
        const isActive = tile.classList.toggle('active');

        // update the active tile reference
        activeTile = isActive ? tile : null;
    });
});
